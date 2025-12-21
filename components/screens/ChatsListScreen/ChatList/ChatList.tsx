import { ScrollView, StyleSheet } from "react-native"
import { colors } from "@/design-system/colors"
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
    <ScrollView contentContainerStyle={styles.container} style={styles.scrollView}>
      {list.map((item) => {
        const { id, ...rowProps } = item
        return <ChatListRow key={id} {...rowProps} onPress={() => onChatPress?.(item)} />
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    rowGap: 10,
    backgroundColor: colors.background,
  },
})
