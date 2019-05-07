import React from 'react'

export default class VideoOptions extends React.Component {

  render() {
    return (
      <React.Fragment>
        <h1>Start a New Video: </h1>
        <form onSubmit={this.props.updateVideoID} >
          <input type="text" onChange={(e) => this.props.handleChange(e, "typingVideoID")}/>
          <input type="submit" />
        </form>
      </React.Fragment>
    )
  }
}
