import { ActivityIndicator, StyleSheet, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { SearchForm } from "@/components/forms/SearchForm"
import { ChatList, ChatListItem } from "./ChatList"
import { colors } from "@/design-system/colors"
import { Typography } from "@/components/common/Typography"
import { useChatsList } from "./hooks"

type ChatsListScreenProps = {
  onChatPress?: (chat: ChatListItem) => void
}

export const ChatsListScreen = ({ onChatPress }: ChatsListScreenProps) => {
  const { chatList, isLoading, error } = useChatsList()

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
        {isLoading && (
          <View style={styles.status}>
            <ActivityIndicator size="large" color={colors.highlight} />
            <Typography name="body-s" color="textMuted">
              Loading chats...
            </Typography>
          </View>
        )}
        {error && (
          <View style={styles.error}>
            <Typography name="body-s" color="danger">
              {error}
            </Typography>
          </View>
        )}
        {!isLoading && <ChatList list={chatList} onChatPress={onChatPress} />}
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
  status: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 10,
  },
  error: {
    marginHorizontal: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.dangerBorder,
    backgroundColor: colors.dangerSoft,
    alignItems: "center",
  },
})
