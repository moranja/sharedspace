import React from 'react'

const ChatBox = (props) => (
  <React.Fragment>
    <form onSubmit={props.handleSubmit} >
      <input name="message" type="text" value={props.workingMessage}  onChange={props.handleChange} style={{width: "100"}}/>
      <input type="submit" value="Send"/>
    </form>
  </React.Fragment>
)

export default ChatBox
