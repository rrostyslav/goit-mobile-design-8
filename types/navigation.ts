export type RootStackParamList = {
  Login: undefined
  AppDrawer: undefined
}

export type DrawerParamList = {
  Chats: undefined
  Support: undefined
}

export type ChatsStackParamList = {
  ChatsList: undefined
  Chat: { chatId: string; username: string } | undefined
}
