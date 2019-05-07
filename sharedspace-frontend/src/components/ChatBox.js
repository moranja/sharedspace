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
      <form onSubmit={this.props.handleSubmit}>
      <div className="ui form">
        <div className="fields">
          <div style={{ margin: '2.5%', width: "95%"}} className="field">
            <input name="message" type="text" placeholder="new message" value={this.props.workingMessage}  onChange={this.props.handleChange}/>
            <input type="submit" id="messageButton" value="Send" ref={(el) => {this.messagesEnd = el; }} className="ui black basic button" style={{width: "100%", display: "inline"}}/>

          </div>


        </div>




      </div>

      </form>

    </React.Fragment>
    )
  }
}
