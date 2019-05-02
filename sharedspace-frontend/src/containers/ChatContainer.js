import React from 'react'
import ChatBox from '../components/ChatBox'
import ChatHistoryContainer from './ChatHistoryContainer'

export default class ChatContainer extends React.Component {

  state = {
    messages: [],
    workingMessage: ""
  }

  handleChange = (e) => {
    e.persist()
    this.setState({workingMessage: e.target.value})
  } // Mark is typing?

  handleSubmit = (e) => {
    e.persist()
    e.preventDefault()
    const newMessage = {
      userID: 1,
      content: this.state.workingMessage,
      sentAt: "test"
    }
    this.setState({ messages: [...this.state.messages, newMessage]})
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <ChatHistoryContainer messages={this.state.messages} />
        <ChatBox handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
      </div>
    )
  }
}
