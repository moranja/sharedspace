import React from 'react'

export default class VideoOptions extends React.Component {

  render() {
    return (
      <React.Fragment>
        <p>Start a New Video: </p>
        <form onSubmit={this.props.updateVideoID} >
          <div className="ui form" >
            <div className="fields">
              <div style={{ margin: '0%', width: "100%"}} className="field">
                <input placeholder="YouTube video ID" type="text" onChange={(e) => this.props.handleChange(e, "typingVideoID")}/>
                <input type="submit" className="ui black basic button" style={{width: "100%", display: "block"}}/>
              </div>
            </div>
          </div>
        </form>
        <p></p>
      </React.Fragment>
    )
  }
}
