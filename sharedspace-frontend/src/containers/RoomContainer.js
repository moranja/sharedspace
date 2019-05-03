import React from 'react'
import ChatContainer from './ChatContainer'
import ActivityContainer from './ActivityContainer'
import OptionsContainer from './OptionsContainer'

export default class RoomContainer extends React.Component {
  state = {
    mode: "music",
    chosenInstrument: ""
  }

  selectInstrument = (inst) => {
    this.setState({ chosenInstrument: inst})
  }

  resetInstrument = () => {
    this.setState({ chosenInstrument: "" })
  }

  render() {
    return (
      <div className="ui grid">
        <ActivityContainer chosenInstrument={this.state.chosenInstrument}/>
        <div className="four wide column">
          <OptionsContainer chosenInstrument={this.state.chosenInstrument} selectInstrument={this.selectInstrument} resetInstrument={this.resetInstrument} />
          <ChatContainer />
        </div>
      </div>
    )
  }
}
