import React from 'react'
import ChatContainer from './ChatContainer'
import ActivityContainer from './ActivityContainer'
import OptionsContainer from './OptionsContainer'
import Login from '../components/login'
import CreateUser from '../components/CreateUser'
import Header from '../components/Header'

export default class RoomContainer extends React.Component {
  state = {
    mode: "music",
    chosenInstrument: "",
    roomMode: "loggedIn"
  }

  logout = () => {
    this.setState({roomMode: "login"})
  }

  selectInstrument = (inst) => {
    this.setState({ chosenInstrument: inst})
  }

  resetInstrument = () => {
    this.setState({ chosenInstrument: "" })
  }

  changeRoomMode = () => {
    this.setState({roomMode: "loggedIn"})
  }

  selectRoomWindow(){
    if (this.state.roomMode === "login"){
      return (
        <div>
          <Header logout={this.logout}/>
          <Login />
        </div>
      )
    } else if (this.state.roomMode === "createUser"){
      return (
        <div>
          <Header logout={this.logout}/>
          <CreateUser changeRoomMode={this.changeRoomMode}/>
        </div>
      )
    } else if (this.state.roomMode === "loggedIn"){
      return (
        <div className="ui grid">
          <Header logout={this.logout}/>
          <ActivityContainer chosenInstrument={this.state.chosenInstrument}/>
          <div className="four wide column">
            <OptionsContainer chosenInstrument={this.state.chosenInstrument} selectInstrument={this.selectInstrument} resetInstrument={this.resetInstrument}/>
            <ChatContainer />
          </div>
        </div>
      )
    }
  }

  render(){
    return (
      <div>
        {this.selectRoomWindow()}
      </div>
    )
  }

}
