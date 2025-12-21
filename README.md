# GoIT Mobile Design 7

## Scripts

```sh
npm run storybook
npm run ios
npm run android
```

## Navigation Structure

- Stack Navigation:
  - RootStack: Login -> AppDrawer.
  - ChatsStack: ChatsList -> Chat (chat screen).
- Drawer Navigation:
  - Drawer: Chats (ChatsStack), Support (placeholder).

## Screen Relations
- Login -> AppDrawer (after pressing Login).
- ChatsList -> Chat (open a specific chat).

## Screen Params
- Chat: { chatId, username } to render the header and chat data.

## Screenshots

<table>
  <tr>
    <th align="center">Chat List</th>
  </tr>
  <tr>
    <td align="center"><img src="docs/ChatList.png" alt="Chat List" /></td>
  </tr>
  <tr>
    <th align="center">Email Field</th>
  </tr>
  <tr>
    <td align="center"><img src="docs/EmailField.png" alt="Email Field" /></td>
  </tr>
  <tr>
    <th align="center">Login Form</th>
  </tr>
  <tr>
    <td align="center"><img src="docs/LoginForm.png" alt="Login Form" /></td>
  </tr>
  <tr>
    <th align="center">Messages List</th>
  </tr>
  <tr>
    <td align="center"><img src="docs/MessagesList.png" alt="Messages List" /></td>
  </tr>
  <tr>
    <th align="center">Password Field</th>
  </tr>
  <tr>
    <td align="center"><img src="docs/PasswordField.png" alt="Password Field" /></td>
  </tr>
  <tr>
    <th align="center">Search Field</th>
  </tr>
  <tr>
    <td align="center"><img src="docs/SearchField.png" alt="Search Field" /></td>
  </tr>
  <tr>
    <th align="center">Search Form</th>
  </tr>
  <tr>
    <td align="center"><img src="docs/SearchForm.png" alt="Search Form" /></td>
  </tr>
  <tr>
    <th align="center">Send Message Form</th>
  </tr>
  <tr>
    <td align="center"><img src="docs/SendMessageForm.png" alt="Send Message Form" /></td>
  </tr>
</table>
