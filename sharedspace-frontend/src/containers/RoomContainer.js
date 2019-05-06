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

  selectRoomWindow(){
    if (this.state.login === "login"){
      return (
        <div>
          <Header logout={this.logout}/>
          <Login login={this.login}/>
        </div>
      )
    } else if (this.state.login === "createUser"){
      return (
        <div>
          <Header logout={this.logout}/>
          <CreateUser login={this.login}/>
        </div>
      )
    } else if (this.state.login === "loggedIn"){
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
