import React from 'react'
import YouTube from 'react-youtube'
import ChatContainer from './ChatContainer'
import ActivityContainer from './ActivityContainer'
import OptionsContainer from './OptionsContainer'
import Login from '../components/login'
import CreateUser from '../components/CreateUser'
import Header from '../components/Header'
import {initSocket} from '../components/ioConnection'

export default class RoomContainer extends React.Component {

  state = {
    mode: "chat",
    chosenInstrument: "",
    login: "login"
  }

  logout = () => {
    this.setState({login: "login"})
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

  handlePlay = () => {

  }

  handlePause = () => {

  }

  selectRoomWindow(){
    if (localStorage.token) {
      initSocket()
      if (this.state.roomID) { // If you've already entered a room...
        if (this.state.mode === "music") { // And if that room is in the music mode ...
          return (
            <React.Fragment>
              <Header mode={this.state.mode} handleChange={this.handleChange} logout={this.logout}/>
              <div className="twelve wide column" style={{borderStyle: "solid", borderWidth: "0.5px"}}>
                <ActivityContainer chosenInstrument={this.state.chosenInstrument}/>
              </div>
              <div className="four wide column" style={{borderStyle: "solid", borderWidth: "0.5px"}}>
                <div className="ui one column grid">
                  <div className="row" style={{borderStyle: "solid", borderWidth: "0.5px"}}>
                    <OptionsContainer chosenInstrument={this.state.chosenInstrument} selectInstrument={this.selectInstrument} resetInstrument={this.resetInstrument}/>
                  </div>
                  <div className="row" style={{borderStyle: "solid", borderWidth: "0.5px", overflowY: "scroll",  wordWrap: "break-word", height: "680px"}}>
                    <ChatContainer roomID={this.state.roomID}/>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )
        } else if (this.state.mode === "video") { // else if that room is in the video mode...
          return (
            <React.Fragment>
              <Header mode={this.state.mode} handleChange={this.handleChange} logout={this.logout}/>
              <div className="twelve wide column" style={{borderStyle: "solid", borderWidth: "0.5px", overflowY: "scroll",  wordWrap: "break-word", height: "680px"}}>
                <YouTube videoId="cJsyMmC76aM" onPlay={this.handlePlay} onPause={this.handlePause}/>
              </div>
              <div className="four wide column" style={{borderStyle: "solid", borderWidth: "0.5px"}}>
                <div className="ui one column grid">
                  <div className="row">
                    <OptionsContainer roomMode={this.state.roomMode} chosenInstrument={this.state.chosenInstrument} selectInstrument={this.selectInstrument} resetInstrument={this.resetInstrument}/>
                  </div>
                  <div className="row" style={{borderStyle: "solid", borderWidth: "0.5px", overflowY: "scroll",  wordWrap: "break-word", height: "680px"}}>
                    <ChatContainer roomID={this.state.roomID}/>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )
        } else { // else if that room is in the chat mode (default)...
          return (
            <React.Fragment>
              <Header mode={this.state.mode} handleChange={this.handleChange} logout={this.logout}/>
              <div className="twelve wide column scroller" style={{borderStyle: "solid", borderWidth: "0.5px", overflowY: "scroll",  wordWrap: "break-word", height: "680px"}}>
                <ChatContainer roomID={this.state.roomID}/>
              </div>
              <div className="four wide column" style={{borderStyle: "solid", borderWidth: "0.5px"}}>
                <div className="ui one column grid">
                  <div className="row">
                    <OptionsContainer roomMode={this.state.roomMode} chosenInstrument={this.state.chosenInstrument} selectInstrument={this.selectInstrument} resetInstrument={this.resetInstrument}/>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )
        }
      } else { // If you haven't entered a room yet ...
        return (
          <React.Fragment>
            <Header logout={this.logout}/>
            <div className="twelve wide column" style={{borderStyle: "solid", borderWidth: "0.5px", overflowY: "scroll",  wordWrap: "break-word", height: "680px"}}>
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
            <div className="four wide column" style={{borderStyle: "solid", borderWidth: "0.5px"}}>
              <div className="ui one column grid">
                <div className="row">
                  <OptionsContainer roomMode={this.state.roomMode} chosenInstrument={this.state.chosenInstrument} selectInstrument={this.selectInstrument} resetInstrument={this.resetInstrument}/>
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
            <Header logout={this.logout}/>
            <div className="sixteen wide column" style={{borderStyle: "solid", borderWidth: "0.5px"}}>
              <Login login={this.login} createUser={this.createUser}/>
            </div>
          </React.Fragment>
        )
      } else if (this.state.login === "createUser"){
        return (
          <React.Fragment>
            <Header logout={this.logout}/>
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
          <div className="ui grid foreground" style={{borderStyle: "solid", borderWidth: "0.5px"}}>
            {this.selectRoomWindow()}
          </div>
        </div>
      </React.Fragment>
    )
  }

}
