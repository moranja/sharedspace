import React from 'react'

const VideoOptions = (props) => (
  <React.Fragment>
    <p>Start a New Video: </p>
    <form onSubmit={props.updateVideoID} >
      <div className="ui form" >
        <div className="fields">
          <div style={{width: "95%", position: "relative", margin: "auto"}} className="field">
            <input placeholder="YouTube video ID" type="text" onChange={(e) => props.handleChange(e, "typingVideoID")}/>
            <input type="submit" className="ui black basic button" style={{width: "100%", display: "block"}}/>
          </div>
        </div>
      </div>
    </form>
    <p></p>
  </React.Fragment>
)

export default VideoOptions
