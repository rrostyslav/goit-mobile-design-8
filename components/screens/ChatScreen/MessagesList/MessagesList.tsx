import { FlatList, ListRenderItem, ViewStyle } from "react-native"
import { useCallback, useMemo, useRef } from "react"
import { ChatMessage, Message } from "../Message"

export type MessagesListProps = {
  bubbleMaxWidth: number
  horizontalPadding: number
  messages: ChatMessage[]
}

export const MessagesList = ({ bubbleMaxWidth, horizontalPadding, messages }: MessagesListProps) => {
  const listRef = useRef<FlatList<ChatMessage>>(null)

  const scrollToBottom = useCallback(() => {
    listRef.current?.scrollToEnd({ animated: false })
  }, [])

  const renderItem: ListRenderItem<ChatMessage> = useCallback(
    ({ item }) => <Message message={item} maxWidth={bubbleMaxWidth} />,
    [bubbleMaxWidth]
  )

  const contentContainerStyle = useMemo<ViewStyle>(
    () => ({
      display: "flex",
      rowGap: 10,
      paddingHorizontal: horizontalPadding,
      paddingBottom: 12,
      flexGrow: 1,
    }),
    [horizontalPadding]
  )

  return (
    <FlatList
      ref={listRef}
      data={messages}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      style={{ flex: 1 }}
      contentContainerStyle={contentContainerStyle}
      onContentSizeChange={scrollToBottom}
      onLayout={scrollToBottom}
    />
  )
}
