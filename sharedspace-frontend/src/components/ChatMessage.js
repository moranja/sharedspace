import React from 'react'

const ChatMessage = (props) => (
  <div  className="comment"
        style={{borderStyle: "solid", borderWidth: "0.5px", backgroundColor: "#ffffffa8"}}
        align={props.message.username === localStorage.name? "right" : "left"} >
          {/* <p className="metadata">{props.message.createdAt}</p> */}
          <p className="author">&nbsp;&nbsp;{props.message.username}&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;{props.message.content}&nbsp;&nbsp;</p>
  </div>
)

export default ChatMessage
