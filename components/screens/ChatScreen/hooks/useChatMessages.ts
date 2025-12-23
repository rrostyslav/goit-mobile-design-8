import { useEffect, useState } from "react"
import { fetchMessages } from "@/services/chatApi"
import type { ChatMessage } from "../Message"

type UseChatMessagesResult = {
  messages: ChatMessage[]
  isLoading: boolean
  error: string | null
}

export const useChatMessages = (chatId?: string): UseChatMessagesResult => {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!chatId) {
      setMessages([])
      setIsLoading(false)
      setError(null)
      return
    }

    let isActive = true

    const loadMessages = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const data = await fetchMessages()
        if (!isActive) return
        const mapped = data.map((message) => ({
          id: message.id,
          name: message.senderName,
          message: message.text,
          isOwn: message.isOwn,
        }))
        setMessages(mapped)
      } catch (caught) {
        if (!isActive) return
        const message = caught instanceof Error ? caught.message : "Failed to load messages."
        setError(message)
      } finally {
        if (isActive) {
          setIsLoading(false)
        }
      }
    }

    loadMessages()

    return () => {
      isActive = false
    }
  }, [chatId])

  return { messages, isLoading, error }
}
