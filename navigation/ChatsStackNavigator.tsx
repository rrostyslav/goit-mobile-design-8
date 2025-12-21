import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ChatScreen } from "@/components/screens/ChatScreen"
import { ChatsListScreen } from "@/components/screens/ChatsListScreen"
import { colors } from "@/design-system/colors"
import { Typography } from "@/components/common/Typography"
import type { ChatListItem } from "@/components/screens/ChatsListScreen/ChatList"
import type { ChatsStackParamList } from "@/types/navigation"

const ChatsStack = createNativeStackNavigator<ChatsStackParamList>()

const HeaderTitle = ({ title }: { title: string }) => (
  <Typography name="h4" color="black">
    {title}
  </Typography>
)

export const ChatsStackNavigator = () => {
  return (
    <ChatsStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.neutral },
        headerTintColor: colors.black,
        headerShadowVisible: true,
        headerTitleAlign: "center",
      }}
    >
      <ChatsStack.Screen
        name="ChatsList"
        options={{
          headerTitle: () => <HeaderTitle title="Chats" />,
        }}
      >
        {({ navigation }) => (
          <ChatsListScreen
            onChatPress={(chat: ChatListItem) => {
              navigation.navigate("Chat", { chatId: chat.id, username: chat.username })
            }}
          />
        )}
      </ChatsStack.Screen>
      <ChatsStack.Screen
        name="Chat"
        component={ChatScreen}
        options={({ route }) => ({
          headerTitle: () => <HeaderTitle title={route.params?.username ?? "Chat"} />,
        })}
      />
    </ChatsStack.Navigator>
  )
}
