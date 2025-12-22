import { apiClient } from "./apiClient"
import type { ChatMessageDto, ChatSummaryDto } from "@/types/api"

export const fetchChats = async (): Promise<ChatSummaryDto[]> => {
  const response = await apiClient.get<ChatSummaryDto[]>("/chats")
  return response.data
}

export const fetchMessages = async (): Promise<ChatMessageDto[]> => {
  const response = await apiClient.get<ChatMessageDto[]>("/messages")
  return response.data
}
