import { useEffect, useState } from "react"
import { fetchChats } from "@/services/chatApi"
import type { ChatListItem } from "../ChatList"

type UseChatsListResult = {
  chatList: ChatListItem[]
  isLoading: boolean
  error: string | null
}

export const useChatsList = (): UseChatsListResult => {
  const [chatList, setChatList] = useState<ChatListItem[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isActive = true

    const loadChats = async () => {
      setIsLoading(true)
      setError(null)
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
      } catch (caught) {
        if (!isActive) return
        const message = caught instanceof Error ? caught.message : "Failed to load chats."
        setError(message)
      } finally {
        if (isActive) {
          setIsLoading(false)
        }
      }
    }

    loadChats()

    return () => {
      isActive = false
    }
  }, [])

  return { chatList, isLoading, error }
}
