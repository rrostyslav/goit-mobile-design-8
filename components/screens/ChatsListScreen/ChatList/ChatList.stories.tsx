import type { Meta, StoryObj } from "@storybook/react-native"
import { View } from "react-native"
import { ChatList } from "./ChatList"

const meta = {
  title: "ChatList",
  component: ChatList,
  args: {
    list: [
      {
        id: "chat-1",
        username: "Jane Cooper",
        lastMessage: "Hey! Are we still on for tomorrow?",
        unreadCount: 2,
      },
      {
        id: "chat-2",
        username: "Devon Lane",
        lastMessage: "I sent the files earlier today.",
        unreadCount: 0,
      },
      {
        id: "chat-3",
        username: "Kristin Watson",
        lastMessage: "Let's sync at 4 PM if that works.",
        unreadCount: 5,
      },
    ],
  },
  decorators: [
    (Story) => (
      <View style={{ height: 360 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof ChatList>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {}
