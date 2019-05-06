import React from 'react'
import ChatMessage from '../components/ChatMessage'

export default class ChatHistoryContainer extends React.Component {

  render() {
    console.log(this.props.messages[0])
    return (
      <div className="ui comments">
        {this.props.messages.map(msg => <ChatMessage message={msg} />)}
      </div>
    )
  }
}
