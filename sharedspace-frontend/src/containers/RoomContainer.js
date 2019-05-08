import React from 'react'
import ChatContainer from './ChatContainer'
import ActivityContainer from './ActivityContainer'
import OptionsContainer from './OptionsContainer'
import VideoContainer from './VideoContainer'
import Login from '../components/login'
import CreateUser from '../components/CreateUser'
import Header from '../components/Header'
import { io, initSocket, resetIO } from '../components/ioConnection'

window.io = io

export default class RoomContainer extends React.Component {

  state = {
    mode: "music",
    chosenInstrument: "",
    login: "login",
    videoID: "cJsyMmC76aM",
    roomID: null
  }

  logout = () => {
    localStorage.clear()
    io.disconnect()
    resetIO()
    this.setState({
      login: "login",
      roomID: null
    })
  }

  leaveRoom = () => {
    io.disconnect()
    resetIO()
    this.setState({
      roomID: null
    })
  }

  selectInstrument = (inst) => {
    this.setState({ chosenInstrument: inst})
  }

  resetInstrument = () => {
    this.setState({ chosenInstrument: "" })
  }

  login = () => {
    this.setState({login: "loggedIn"})
  }

  createUser = (e) => {
    e.preventDefault()
    this.setState({login: "createUser"})
  }

  handleChange = (e, stateValue) => {
    this.setState({[`${stateValue}`]: e.target.value})
  }

  handleSubmit = (e) => {
    e.persist()
    e.preventDefault()
    this.setState({roomID: this.state.typingID})
  }

  updateVideoID = (e) => {
    e.preventDefault()
    io.emit('updateVideoID', {room: this.state.roomID, videoID: this.state.typingVideoID})
    this.setState({videoID: this.state.typingVideoID})
  }

  updateVideoIDFromSocket = (val) => {
    this.setState({videoID: val})
  }

  selectRoomWindow(){
    if (localStorage.token) {
      initSocket()
      if (this.state.roomID) { // If you've already entered a room...
        if (this.state.mode === "music") { // And if that room is in the music mode ...
          return (
            <React.Fragment>
              <Header roomID={this.state.roomID} mode={this.state.mode} handleChange={this.handleChange} logout={this.logout}/>
              <div className="twelve wide column" style={{borderRight: "solid 0.5px"}}>
                <ActivityContainer roomID={this.state.roomID} chosenInstrument={this.state.chosenInstrument}/>
              </div>
              <div className="four wide column" style={{maxHeight: "87vh", display: "flex", "flex-flow": "column", overflow: "hidden"}} >
                {/* <div className="ui one column grid" style={{height: "105%", bottom: "0px"}}> */}
                  {/* <div className="row"> */}
                    <OptionsContainer leaveRoom={this.leaveRoom} roomID={this.state.roomID} mode={this.state.mode} chosenInstrument={this.state.chosenInstrument} selectInstrument={this.selectInstrument} resetInstrument={this.resetInstrument}/>
                  {/* </div> */}
                  {/* <div className="row" style={{bottom: "0px", borderTop: "solid 0.5px", overflowY: "scroll", maxHeight: "450px"}}> */}
                    <ChatContainer roomID={this.state.roomID}/>
                  {/* </div> */}
                {/* </div> */}
              </div>
            </React.Fragment>
          )
        } else if (this.state.mode === "video") { // else if that room is in the video mode...
          return (
            <React.Fragment>
              <Header roomID={this.state.roomID} mode={this.state.mode} handleChange={this.handleChange} logout={this.logout}/>
              <div className="twelve wide column" align="center" style={{borderRight: "solid 0.5px", overflowY: "scroll",  maxHeight: "680px"}}>
                <VideoContainer roomID={this.state.roomID} videoID={this.state.videoID} updateVideoIDFromSocket={this.updateVideoIDFromSocket}/>
              </div>
              <div className="four wide column" style={{maxHeight: "87vh", display: "flex", "flex-flow": "column", overflow: "hidden"}}>
                {/* <div className="ui one column grid"> */}
                  {/* <div className="row"> */}
                    <OptionsContainer leaveRoom={this.leaveRoom} roomID={this.state.roomID} mode={this.state.mode} updateVideoID={this.updateVideoID} handleChange={this.handleChange}/>
                  {/* </div> */}
                  {/* <div className="row" style={{borderStyle: "solid", borderWidth: "0.5px", overflowY: "scroll",  height: "680px"}}> */}
                    <ChatContainer roomID={this.state.roomID}/>
                  {/* </div> */}
                {/* </div> */}
              </div>
            </React.Fragment>
          )
        } else { // else if that room is in the chat mode (default)...
          return (
            <React.Fragment>
              <Header roomID={this.state.roomID} mode={this.state.mode} handleChange={this.handleChange} logout={this.logout}/>
              <div className="twelve wide column scroller" style={{borderStyle: "solid", borderWidth: "0.5px", overflowY: "scroll",  height: "680px"}}>
                <ChatContainer roomID={this.state.roomID}/>
              </div>
              <div className="four wide column" style={{maxHeight: "87vh", display: "flex", "flex-flow": "column", overflow: "hidden"}}>
                {/* <div className="ui one column grid"> */}
                  {/* <div className="row"> */}
                    <OptionsContainer leaveRoom={this.leaveRoom} roomID={this.state.roomID} mode={this.state.mode} updateVideoID={this.updateVideoID} handleChange={this.handleChange}/>
                  {/* </div> */}
                {/* </div> */}
              </div>
            </React.Fragment>
          )
        }
      } else { // If you haven't entered a room yet ...
        return (
          <React.Fragment>
            <Header roomID={this.state.roomID} logout={this.logout}/>
            <div className="sixteen wide column" style={{borderStyle: "solid", borderWidth: "0.5px", overflowY: "scroll"}}>
              <h3>&nbsp;&nbsp;Please enter a room number:</h3>
              <div className="ui form">
                <div className="fields">
                  <div className="field">
                    <input type="text" placeholder="&nbsp;room number" onChange={(e) => this.handleChange(e, "typingID")}/>
                  </div>
                  <div className="field">
                    <input type="submit" onClick={this.handleSubmit} className="ui black basic button"/>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        )
      }
    } else { // If you're not logged in ...
      if (this.state.login === "login"){
        return (
          <React.Fragment>
            <Header roomID={this.state.roomID} logout={this.logout}/>
            <div className="sixteen wide column" style={{borderStyle: "solid", borderWidth: "0.5px"}}>
              <Login login={this.login} createUser={this.createUser}/>
            </div>
          </React.Fragment>
        )
      } else if (this.state.login === "createUser"){
        return (
          <React.Fragment>
            <Header roomID={this.state.roomID} logout={this.logout}/>
            <div className="sixteen wide column" style={{borderStyle: "solid", borderWidth: "0.5px"}}>
              <CreateUser login={this.login}/>
            </div>
          </React.Fragment>
        )
      }
    }
  }

  render(){
    return (
      <React.Fragment>
        <div>
          <div className="ui grid foreground" style={{maxHeight: "100vh", borderStyle: "solid", borderWidth: "0.5px"}}>
            {this.selectRoomWindow()}
          </div>
        </div>
      </React.Fragment>
    )
  }

}
