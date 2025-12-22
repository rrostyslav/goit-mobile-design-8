# Mock API

Base URL: `https://api.example.test`

All responses are JSON.

## GET /chats

Returns the list of chats.

Query params:
- None

Response: `200 OK`
```json
[
  {
    "title": "Ocie_Jacobson",
    "lastMessageText": "Suscipio abstergo temeritas verto consectetur.",
    "lastMessageSender": "Daniella17",
    "unreadCount": 17,
    "id": "1"
  }
]
```

## GET /messages

Returns the messages for a specific chat.

Query params:
- None

Response: `200 OK`
```json
[
  {
    "senderName": "Hortense79",
    "text": "Conturbo subseco alienus adversus.\nSpeciosus cunctatio vulticulus ventosus accommodo alioqui charisma creator uredo comedo.",
    "isOwn": false,
    "id": "1"
  }
]
```
