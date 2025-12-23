import { useEffect, useState } from "react"
import { Keyboard, Platform, useWindowDimensions } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useHeaderHeight } from "@react-navigation/elements"

type UseChatLayoutResult = {
  bubbleMaxWidth: number
  horizontalPadding: number
  orientationKey: string
  formBottomPadding: number
  keyboardVerticalOffset: number
  keyboardAvoidingBehavior: "padding" | undefined
}

export const useChatLayout = (): UseChatLayoutResult => {
  const { width, height } = useWindowDimensions()
  const insets = useSafeAreaInsets()
  const headerHeight = useHeaderHeight()
  const isLandscape = width > height
  const horizontalPadding = isLandscape ? 24 : 15
  const bubbleMaxWidth = Math.min(width * 0.7, isLandscape ? 420 : 320)
  const orientationKey = `${width}x${height}`
  const [keyboardHeight, setKeyboardHeight] = useState(0)
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false)
  const [baselineHeight, setBaselineHeight] = useState(height)

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

  const isWindowResized = Platform.OS === "android" && isKeyboardVisible && height < baselineHeight - 40
  const androidKeyboardPadding =
    Platform.OS === "android" && isKeyboardVisible && !isWindowResized ? keyboardHeight : 0
  const formBottomPadding = Math.max(insets.bottom, 12) + androidKeyboardPadding

  return {
    bubbleMaxWidth,
    horizontalPadding,
    orientationKey,
    formBottomPadding,
    keyboardVerticalOffset: Platform.select({ ios: headerHeight, android: 0 }) ?? 0,
    keyboardAvoidingBehavior: Platform.select({ ios: "padding", android: undefined }),
  }
}
