import React from 'react'

const ChatBox = (props) => (
  <div>
    <form onSubmit={props.handleSubmit} >
      <input name="message" type="text" value={props.workingMessage}  onChange={props.handleChange}/>
      <input type="submit" value="Send"/>
    </form>
  </div>
)

export default ChatBox
