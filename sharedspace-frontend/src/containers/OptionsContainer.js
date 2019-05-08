import React from 'react'
import InstrumentSelector from '../components/InstrumentSelector'
import MusicOptions from '../components/MusicOptions'
import VideoOptions from '../components/VideoOptions'
import UsersList from '../components/UsersList'
import {io} from '../components/ioConnection'

window.io = io

export default class OptionsContainer extends React.Component {

  state = {
    users: []
  }

  displayOptions() {
    if (this.props.mode === "music") {
      return (
        <React.Fragment>
          {!this.props.chosenInstrument ? <InstrumentSelector selectInstrument={this.props.selectInstrument}/> : <MusicOptions chosenInstrument={this.props.chosenInstrument} resetInstrument={this.props.resetInstrument}/>}
        </React.Fragment>
      )
    } else if (this.props.mode === "video"){
      return (
        <React.Fragment>
          <VideoOptions updateVideoID={this.props.updateVideoID} handleChange={this.props.handleChange} />
        </React.Fragment>
      )
    } else {
      return (
        <h1>Something's wrong</h1>
      )
    }
  }

  componentDidMount() {
    io.on('connect', () => {
      console.log({roomID: this.props.roomID, username: localStorage.name})
      io.emit('room', {roomID: this.props.roomID, username: localStorage.name} )
    })

    io.on('usersInRoom', users => {
      this.setState({users: users})
    })
  }

  render() {
    return (
      <React.Fragment>
        <UsersList users={this.state.users} />
        {this.displayOptions()}
      </React.Fragment>
    )
  }

  // componentWillUnmount() {
  //   io.emit('leaveRoom', {roomID: this.props.roomID, username: localStorage.name})
  // }
}
