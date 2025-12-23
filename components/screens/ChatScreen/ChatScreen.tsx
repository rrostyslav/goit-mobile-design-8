import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, useWindowDimensions, View } from "react-native"
import { useEffect, useState } from "react"
import { ChatSendMessageForm } from "@/components/forms/ChatSendMessageForm"
import { MessagesList } from "./MessagesList"
import { Typography } from "@/components/common/Typography"
import type { ChatsStackParamList } from "@/types/navigation"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { colors } from "@/design-system/colors"
import { fetchMessages } from "@/services/chatApi"
import type { ChatMessage } from "./Message"
import { useHeaderHeight } from "@react-navigation/elements"

type ChatScreenProps = Partial<NativeStackScreenProps<ChatsStackParamList, "Chat">>

export const ChatScreen = ({ route }: ChatScreenProps) => {
  const { width, height } = useWindowDimensions()
  const insets = useSafeAreaInsets()
  const headerHeight = useHeaderHeight()
  const isLandscape = width > height
  const horizontalPadding = isLandscape ? 24 : 15
  const bubbleMaxWidth = Math.min(width * 0.7, isLandscape ? 420 : 320)
  const orientationKey = `${width}x${height}`
  const chatId = route?.params?.chatId
  const isChatMissing = !chatId
  const [keyboardHeight, setKeyboardHeight] = useState(0)
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false)
  const [baselineHeight, setBaselineHeight] = useState(height)
  const isWindowResized = Platform.OS === "android" && isKeyboardVisible && height < baselineHeight - 40
  const androidKeyboardPadding =
    Platform.OS === "android" && isKeyboardVisible && !isWindowResized ? keyboardHeight : 0
  const formBottomPadding = Math.max(insets.bottom, 12) + androidKeyboardPadding
  const [messages, setMessages] = useState<ChatMessage[]>([])

  useEffect(() => {
    if (isChatMissing) return
    let isActive = true

    const loadMessages = async () => {
      try {
        const data = await fetchMessages()
        if (!isActive) return
        const mapped = data.map((message) => ({
          id: message.id,
          name: message.senderName,
          message: message.text,
          isOwn: message.isOwn,
        }))
        setMessages(mapped)
      } catch (error) {
        console.log(error)
      }
    }

    loadMessages()

    return () => {
      isActive = false
    }
  }, [isChatMissing])

  useEffect(() => {
    if (Platform.OS !== "android") return

    const showSubscription = Keyboard.addListener("keyboardDidShow", (event) => {
      setIsKeyboardVisible(true)
      setKeyboardHeight(event.endCoordinates.height)
    })
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setIsKeyboardVisible(false)
      setKeyboardHeight(0)
    })

    return () => {
      showSubscription.remove()
      hideSubscription.remove()
    }
  }, [])

  useEffect(() => {
    if (Platform.OS !== "android") return
    if (!isKeyboardVisible) {
      setBaselineHeight(height)
    }
  }, [height, isKeyboardVisible])

  return (
    <KeyboardAvoidingView
      key={orientationKey}
      style={styles.container}
      behavior={Platform.select({ ios: "padding", android: undefined })}
      keyboardVerticalOffset={Platform.select({ ios: headerHeight, android: 0 })}
    >
      {isChatMissing && (
        <View style={styles.notice}>
          <Typography name="body-s" color="gray">
            Chat not found. Please return to the list.
          </Typography>
        </View>
      )}
      <MessagesList bubbleMaxWidth={bubbleMaxWidth} horizontalPadding={horizontalPadding} messages={messages} />
      <View style={[styles.formContainer, { paddingBottom: formBottomPadding }]}>
        <ChatSendMessageForm
          onSubmit={(value) => {
            console.log(value)
          }}
        />
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  notice: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  formContainer: {
    paddingTop: 6,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.surface,
  },
})
