import { useChatMessages } from "./useChatMessages"

type UseChatScreenStateResult = {
  messages: ReturnType<typeof useChatMessages>["messages"]
  showMissing: boolean
  missingText: string
  showLoading: boolean
  loadingText: string
  showError: boolean
  errorText: string
  shouldShowMessages: boolean
}

export const useChatScreenState = (chatId?: string): UseChatScreenStateResult => {
  const { messages, isLoading, error } = useChatMessages(chatId)
  const showMissing = !chatId
  const showLoading = isLoading
  const showError = Boolean(error) && !showMissing

  return {
    messages,
    showMissing,
    missingText: "Chat not found. Please return to the list.",
    showLoading,
    loadingText: "Loading messages...",
    showError,
    errorText: error ?? "",
    shouldShowMessages: !isLoading,
  }
}
