import React from 'react'

const ChatMessage = (props) => (
  <div  className="comment"
        style={{borderStyle: "solid", borderWidth: "0.5px", backgroundColor: "#ffffffa8"}}
        align={props.message.username === localStorage.name? "right" : "left"} >
          <p className="author">&nbsp;&nbsp;{props.message.username} said:&nbsp;&nbsp;</p>
          <p style={{margin: "5%"}}>{props.message.content}</p>
          <p></p>
  </div>
)

export default ChatMessage
