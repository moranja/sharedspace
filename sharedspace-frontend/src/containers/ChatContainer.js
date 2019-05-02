import React from 'react'
import ChatBox from '../components/ChatBox'
import ChatHistoryContainer from './ChatHistoryContainer'
import socketIO from 'socket.io-client'

const io = socketIO('http://localhost:8080')

window.io = io

export default class ChatContainer extends React.Component {

  state = {
    messages: [],
    roomID: 1,
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


    // io.emit('messages.update', )
    this.setState({ messages: [...this.state.messages, newMessage]})
  }

  componentDidMount() {
    io.emit('messages.index', { roomID: this.state.roomID })

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
