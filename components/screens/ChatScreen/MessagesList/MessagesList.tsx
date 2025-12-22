import { FlatList, ListRenderItem } from "react-native"
import { useRef } from "react"
import { ChatMessage, Message } from "../Message"

export type MessagesListProps = {
  bubbleMaxWidth: number
  horizontalPadding: number
  messages: ChatMessage[]
}

export const MessagesList = ({ bubbleMaxWidth, horizontalPadding, messages }: MessagesListProps) => {
  const listRef = useRef<FlatList<ChatMessage>>(null)

  const scrollToBottom = () => {
    listRef.current?.scrollToEnd({ animated: false })
  }

  const renderItem: ListRenderItem<ChatMessage> = ({ item }) => {
    return <Message message={item} maxWidth={bubbleMaxWidth} />
  }

  return (
    <FlatList
      ref={listRef}
      data={messages}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      style={{ flex: 1 }}
      contentContainerStyle={{
        display: "flex",
        rowGap: 10,
        paddingHorizontal: horizontalPadding,
        paddingBottom: 12,
        flexGrow: 1,
      }}
      onContentSizeChange={scrollToBottom}
      onLayout={scrollToBottom}
    />
  )
}
