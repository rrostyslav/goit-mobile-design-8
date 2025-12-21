import { View, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { SearchForm } from "@/components/forms/SearchForm"
import { ChatList, ChatListItem } from "./ChatList"
import { colors } from "@/design-system/colors"

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
    <SafeAreaView style={styles.safeArea}>
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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    rowGap: 10,
    paddingTop: 0,
    paddingBottom: 8,
    backgroundColor: colors.background,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingTop: 0,
  },
})
