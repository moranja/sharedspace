import React from 'react'

const ChatMessage = (props) => (
  <div className="comment">
        {/* <p className="metadata">{props.message.createdAt}</p> */}
        <p className="author">{props.message.userID}</p>
        <p className="text">{props.message.content}</p>
        {/* if userID === my ID ? align right : align left */}
  </div>
)

export default ChatMessage
