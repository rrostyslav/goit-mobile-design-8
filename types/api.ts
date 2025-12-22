export type ChatSummaryDto = {
  id: string
  title: string
  lastMessageText: string
  lastMessageSender: string
  unreadCount: number
}

export type ChatMessageDto = {
  id: string
  senderName: string
  text: string
  isOwn: boolean
}
