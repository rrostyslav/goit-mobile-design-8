import { ActivityIndicator, KeyboardAvoidingView, StyleSheet, View } from "react-native"
import { ChatSendMessageForm } from "@/components/forms/ChatSendMessageForm"
import { MessagesList } from "./MessagesList"
import { Typography } from "@/components/common/Typography"
import type { ChatsStackParamList } from "@/types/navigation"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import { colors } from "@/design-system/colors"
import { useChatLayout, useChatScreenState } from "./hooks"

type ChatScreenProps = Partial<NativeStackScreenProps<ChatsStackParamList, "Chat">>

export const ChatScreen = ({ route }: ChatScreenProps) => {
  const chatId = route?.params?.chatId
  const {
    bubbleMaxWidth,
    horizontalPadding,
    orientationKey,
    formBottomPadding,
    keyboardVerticalOffset,
    keyboardAvoidingBehavior,
  } = useChatLayout()
  const { messages, showMissing, missingText, showLoading, loadingText, showError, errorText, shouldShowMessages } =
    useChatScreenState(chatId)

  return (
    <KeyboardAvoidingView
      key={orientationKey}
      style={styles.container}
      behavior={keyboardAvoidingBehavior}
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      {showMissing && (
        <View style={styles.notice}>
          <Typography name="body-s" color="gray">
            {missingText}
          </Typography>
        </View>
      )}
      {showLoading && (
        <View style={styles.status}>
          <ActivityIndicator size="large" color={colors.highlight} />
          <Typography name="body-s" color="textMuted">
            {loadingText}
          </Typography>
        </View>
      )}
      {showError && (
        <View style={styles.errorWrapper}>
          <View style={styles.errorCard}>
            <Typography name="body-s" color="danger">
              {errorText}
            </Typography>
          </View>
        </View>
      )}
      {shouldShowMessages && (
        <MessagesList bubbleMaxWidth={bubbleMaxWidth} horizontalPadding={horizontalPadding} messages={messages} />
      )}
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
    height: "100%",
  },
  status: {
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 8,
  },
  errorWrapper: {
    flex: 1,
    marginHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  errorCard: {
    width: "100%",
    minHeight: 56,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.dangerBorder,
    backgroundColor: colors.dangerSoft,
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    paddingTop: 6,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.surface,
  },
})
