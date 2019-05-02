import React from 'react'
import ChatMessage from '../components/ChatMessage'

export default class ChatHistoryContainer extends React.Component {

  render() {
    return (
      <div>
        {this.props.messages.map(msg => <ChatMessage message={msg} />)}
      </div>
    )
  }
}