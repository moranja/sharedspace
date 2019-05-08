import React from 'react'
import ChatMessage from '../components/ChatMessage'

const ChatHistoryContainer = (props) => (
  <React.Fragment>
    {props.messages.map(msg => <ChatMessage message={msg} key={msg.id}/>)}
  </React.Fragment>
)

export default ChatHistoryContainer
