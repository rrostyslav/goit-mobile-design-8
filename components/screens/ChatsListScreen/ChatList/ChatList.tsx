import { ScrollView } from "react-native"
import { ChatListRow, ChatListRowProps } from "../ChatListRow"

export type ChatListItem = ChatListRowProps & {
  id: string
}

export type ChatListProps = {
  list: ChatListItem[]
  onChatPress?: (chat: ChatListItem) => void
}

export const ChatList = ({ list, onChatPress }: ChatListProps) => {
  return (
    <ScrollView>
      {list.map((item) => {
        const { id, ...rowProps } = item
        return <ChatListRow key={id} {...rowProps} onPress={() => onChatPress?.(item)} />
      })}
    </ScrollView>
  )
}
