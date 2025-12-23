import { FlatList, ListRenderItem, StyleSheet } from "react-native"
import { useCallback } from "react"
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
  const renderItem: ListRenderItem<ChatListItem> = useCallback(({ item }) => {
    const { id, ...rowProps } = item
    return <ChatListRow {...rowProps} onPress={() => onChatPress?.(item)} />
  }, [onChatPress])

  return (
    <FlatList
      data={list}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
      style={styles.list}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 4,
    paddingBottom: 20,
    rowGap: 10,
    backgroundColor: colors.background,
  },
})
