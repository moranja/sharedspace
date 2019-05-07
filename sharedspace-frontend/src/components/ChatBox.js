import React, {Component} from 'react'

export default class ChatBox extends Component {

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render(){
    return (
      <React.Fragment>
      <form onSubmit={this.props.handleSubmit}  style={{width: "100%"}}>
        <input name="message" type="text" value={this.props.workingMessage}  onChange={this.props.handleChange} style={{width: "100%"}}/>
        <input type="submit" id="messageButton" value="Send" ref={(el) => {this.messagesEnd = el; }}/>
      </form>
    </React.Fragment>
    )
  }
}
