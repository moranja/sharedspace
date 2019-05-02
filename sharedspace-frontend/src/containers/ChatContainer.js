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
  }

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
  // Don't think this needs a controlled form, no reason to care what every letter they type is til they send it, unless we wanted to implement some sort of "Mark is typing..." detail


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
