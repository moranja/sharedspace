import React from 'react'

const ChatMessage = (props) => (
  <div  className="comment"
        style={{borderStyle: "solid", borderWidth: "0.5px"}}
        margin="10px"
        width="100%"
        align={props.message.username === localStorage.name? "right" : "left"} >
          {/* <p className="metadata">{props.message.createdAt}</p> */}
          <p className="author" wordWrap="break-word">&nbsp;&nbsp;{props.message.username}&nbsp;&nbsp;</p>
          <p  wordWrap="break-word">&nbsp;&nbsp;{props.message.content}&nbsp;&nbsp;</p>
  </div>
)

export default ChatMessage
