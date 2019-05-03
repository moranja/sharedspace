import React from 'react'
import ChatBox from '../components/ChatBox'
import ChatHistoryContainer from './ChatHistoryContainer'
import io from '../components/ioConnection'

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
    console.log(e)
    const newMessage = {
      userID: 1,
      roomID: 1,
      content: this.state.workingMessage
    }

    this.setState({ workingMessage: "" })

    io.emit('messages.new', newMessage)
  }

  componentDidMount() {
    io.emit('messages.index', { roomID: this.state.roomID }, roomMessages => {
      console.log(roomMessages)
      this.setState({ messages: roomMessages })
    })

    io.on('messages.newMessageFromServer', roomMessages => {
      this.setState({ messages: roomMessages })
    })

  }

  render() {
    return (
      <div className="four wide column">
        <ChatHistoryContainer messages={this.state.messages} />
        <ChatBox workingMessage={this.state.workingMessage} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
      </div>
    )
  }
}
