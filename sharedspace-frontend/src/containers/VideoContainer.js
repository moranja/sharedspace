import React from 'react'
import YouTube from 'react-youtube'
import {io} from '../components/ioConnection'

window.io = io

export default class VideoContainer extends React.Component {


  handleStateChange = (e) => {
    // put the video object into state, so we can grab it later

    // e.data corresponds to...
    // -1 (unstarted)
    // 0 (ended)
    // 1 (playing)
    // 2 (paused)
    // 3 (buffering)
    // 5 (video cued)

    if (e.data === 1) { // if the video has been unpaused, then tell that to the backend
        io.emit('playVideo', {room: this.props.roomID })
    } else if (e.data === 2) { // same for when it gets paused
      io.emit('pauseVideo', {room: this.props.roomID })
    }
  }

  playVideo = () => {
    this.state.yt.playVideo()
  }

  pauseVideo = () => {
    this.state.yt.pauseVideo()
  }

  handleReady = (event) => {
    this.setState({ yt: event.target })
  }

  componentDidMount() {
    console.log(io)
    io.on('playVideoForAll', note => {
      // console.log(note)
      // console.log(this.state.yt)
      this.playVideo()
    })

    io.on('pauseVideoForAll', note => {
      // console.log(note)
      // console.log(this.state.yt)
      this.pauseVideo()
    })

    io.on('receiveNewVideoID', videoID => {
      this.props.updateVideoIDFromSocket(videoID)
    })
  }

  render() {
    return(
      <YouTube videoId={this.props.videoID} onReady={this.handleReady} onStateChange={this.handleStateChange}/>
    )
  }
}
