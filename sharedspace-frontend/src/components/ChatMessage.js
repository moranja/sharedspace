import React from 'react'

const ChatMessage = (props) => (
  <div>
  {/* if userID === my ID ? align right : align left */}
    <h1>{props.message.userID}</h1>
    <p>{props.message.content}</p>
  </div>
)

export default ChatMessage
