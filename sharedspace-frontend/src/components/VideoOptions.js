import React from 'react'

export default class VideoOptions extends React.Component {

  render() {
    return (
      <React.Fragment>
        <p>Start a New Video: </p>
        <form onSubmit={this.props.updateVideoID} >
          <div className="ui form" >
            <div className="fields">
              <div style={{width: "95%", position: "relative", margin: "auto"}} className="field">
                <input placeholder="YouTube video ID" type="text" onChange={(e) => this.props.handleChange(e, "typingVideoID")}/>
                <input type="submit" className="ui black basic button" style={{width: "100%", display: "block"}}/>
              </div>
            </div>
          </div>
        </form>
        <p></p>
      </React.Fragment>

        // <div className="ui comments" style={{width: "95%", position: "relative", overflowY: "scroll", overflowX: "hidden", maxHeight: "650px", margin: "auto"}}>
        // <ChatHistoryContainer messages={this.state.messages} />
        // {/* </div>
        // <div className="ui comments" > */}
        // <p></p>
        // <ChatBox workingMessage={this.state.workingMessage} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        // </div>
    )
  }
}
