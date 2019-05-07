// import React from 'react'
// import YouTube from 'react-youtube'
// import {io} from '../components/ioConnection'
//
// window.io = io
//
// export default class VideoContainer extends React.Component {
//
//
//   state = {
//     videoId: "cJsyMmC76aM",
//     paused: true
//   }
//
//   handlePlay = () => {
//
//   }
//
//   handlePause = () => {
//
//   }
//
//   handleStateChange = (e) => {
//     // e.data corresponds to...
//     // -1 (unstarted)
//     // 0 (ended)
//     // 1 (playing)
//     // 2 (paused)
//     // 3 (buffering)
//     // 5 (video cued)
//     if (e.data === 1) {
//       io.emit('playVideo', {room: this.props.roomID })
//     } else if (e.data === 2) {
//       io.emit('pauseVideo', {room: this.props.roomID })
//     }
//   }
//
//   playVideo = (event) => {
//     console.log(event)
//     // event.target.playVideo()
//   }
//
//   pauseVideo = (event) => {
//     // event.target.pauseVideo()
//   }
//
//
//
//   componentDidMount() {
//     io.on('connect', () => {
//       io.emit('room', this.props.roomID )
//     })
//
//     io.on('playVideoForAll', () => {
//       this.playVideo()
//     })
//
//     io.on('pauseVideoForAll', note => {
//       this.pauseVideo()
//     })
//   }
//
//   render() {
//     return(
//       <YouTube videoId={this.state.videoId} onStateChange={this.handleStateChange}/>
//     )
//   }
// }
