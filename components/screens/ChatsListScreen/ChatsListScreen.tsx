import { View, StyleSheet } from "react-native"
import { useEffect, useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { SearchForm } from "@/components/forms/SearchForm"
import { ChatList, ChatListItem } from "./ChatList"
import { colors } from "@/design-system/colors"
import { fetchChats } from "@/services/chatApi"

type ChatsListScreenProps = {
  onChatPress?: (chat: ChatListItem) => void
}

export const ChatsListScreen = ({ onChatPress }: ChatsListScreenProps) => {
  const [chatList, setChatList] = useState<ChatListItem[]>([])

  useEffect(() => {
    let isActive = true

    const loadChats = async () => {
      try {
        const data = await fetchChats()
        if (!isActive) return
        const mapped = data.map((chat) => ({
          id: chat.id,
          username: chat.title,
          lastMessage: chat.lastMessageSender
            ? `${chat.lastMessageSender}: ${chat.lastMessageText}`
            : chat.lastMessageText,
          unreadCount: chat.unreadCount,
        }))
        setChatList(mapped)
      } catch (error) {
        console.log(error)
      }
    }

    loadChats()

    return () => {
      isActive = false
    }
  }, [])

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
