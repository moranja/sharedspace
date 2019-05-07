import React from 'react'
import InstrumentSelector from '../components/InstrumentSelector'
import MusicOptions from '../components/MusicOptions'
import VideoOptions from '../components/VideoOptions'

export default class OptionsContainer extends React.Component {

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

  render() {
    return (
      <React.Fragment>
        {this.displayOptions()}
      </React.Fragment>
    )
  }
}
