import { View } from "react-native"
import { SearchForm } from "@/components/forms/SearchForm"
import { ChatList, ChatListItem } from "./ChatList"

type ChatsListScreenProps = {
  onChatPress?: (chat: ChatListItem) => void
}

export const ChatsListScreen = ({ onChatPress }: ChatsListScreenProps) => {
  const chatList: ChatListItem[] = Array.from({ length: 20 }, (_, index) => ({
    id: `chat-${index + 1}`,
    username: `Test ${index + 1}`,
    lastMessage:
      "Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test ",
    unreadCount: index % 3 === 0 ? 0 : 9,
  }))

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchForm
          onSearch={(value) => {
            console.log(value)
          }}
        />
      </View>
      <ChatList list={chatList} onChatPress={onChatPress} />
    </View>
  )
}

const styles = {
  container: {
    rowGap: 12,
    paddingTop: 12,
  },
  searchContainer: {
    paddingHorizontal: 16,
  },
}
