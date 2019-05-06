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

  createUser = (e) => {
    e.preventDefault()
    this.setState({login: "createUser"})
  }

  selectRoomWindow(){
    if (localStorage.token) {
      return (
        <React.Fragment>
          <Header logout={this.logout}/>
          <div className="twelve wide column" style={{borderStyle: "solid", borderWidth: "2px"}}>
            <ActivityContainer chosenInstrument={this.state.chosenInstrument}/>
          </div>
          <div className="four wide column" style={{borderStyle: "solid", borderWidth: "2px"}}>
            <div className="ui one column grid">
              <div className="row" style={{borderStyle: "solid", borderWidth: "2px"}}>
                <OptionsContainer chosenInstrument={this.state.chosenInstrument} selectInstrument={this.selectInstrument} resetInstrument={this.resetInstrument}/>
              </div>
              <div className="row" style={{borderStyle: "solid", borderWidth: "2px", overflow: "scroll", height: "680px"}}>
                <ChatContainer />
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    } else {
      if (this.state.login === "login"){
        return (
          <React.Fragment>
            <Header logout={this.logout}/>
            <div className="sixteen wide column" style={{borderStyle: "solid", borderWidth: "2px"}}>
              <Login login={this.login} createUser={this.createUser}/>
            </div>
          </React.Fragment>
        )
      } else if (this.state.login === "createUser"){
        return (
          <React.Fragment>
            <Header logout={this.logout}/>
            <div className="sixteen wide column" style={{borderStyle: "solid", borderWidth: "2px"}}>
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
        <div className="ui grid" style={{borderStyle: "solid", borderWidth: "2px"}}>
          {this.selectRoomWindow()}
        </div>
      </React.Fragment>
    )
  }

}
