import { View } from "react-native"
import { memo } from "react"
import { Typography } from "@/components/common/Typography"
import { colors } from "@/design-system/colors"

export type ChatMessage = {
  id: string
  name: string
  message: string
  isOwn: boolean
}

type MessageProps = {
  message: ChatMessage
  maxWidth: number
}

export const Message = memo(({ message, maxWidth }: MessageProps) => {
  return (
    <View
      style={{
        alignItems: message.isOwn ? "flex-end" : "flex-start",
      }}
    >
      <View
        style={[
          {
            borderRadius: 20,
            paddingHorizontal: 16,
            paddingVertical: 12,
            rowGap: 4,
            minWidth: 100,
            maxWidth,
          },
          {
            backgroundColor: message.isOwn ? colors.highlight : colors.surface,
          },
        ]}
      >
        <Typography name="h5" customColor={message.isOwn ? colors.highlightSoft : colors.textMuted}>
          {message.name}
        </Typography>
        <Typography name="body-m" color={message.isOwn ? "neutral" : "black"}>
          {message.message}
        </Typography>
      </View>
    </View>
  )
})
