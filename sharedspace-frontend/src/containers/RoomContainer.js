import React from 'react'
import ChatContainer from './ChatContainer'
import ActivityContainer from './ActivityContainer'
import OptionsContainer from './OptionsContainer'

export default class RoomContainer extends React.Component {
  state = {
    mode: "music",
    selectedInstrument: ""
  }

  selectInstrument = (inst) => {
    this.setState({ selectedInstrument: inst})
  }

  resetInstrument = () => {
    this.setState({ selectedInstrument: "" })
  }

  render() {
    return (
      <div>
        <h1>Room Container</h1>
        <ActivityContainer />
        <OptionsContainer selectedInstrument={this.state.selectedInstrument} selectInstrument={this.selectInstrument} resetInstrument={this.resetInstrument} />
        <ChatContainer />
      </div>
    )
  }
}
