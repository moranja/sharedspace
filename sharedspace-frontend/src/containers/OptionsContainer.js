import React from 'react'
import InstrumentSelector from '../components/InstrumentSelector'
import MusicOptions from '../components/MusicOptions'

export default class OptionsContainer extends React.Component {

  render() {
    return (
      <React.Fragment>
          {!this.props.chosenInstrument ? <InstrumentSelector selectInstrument={this.props.selectInstrument}/> : <MusicOptions chosenInstrument={this.props.chosenInstrument} resetInstrument={this.props.resetInstrument}/>}
      </React.Fragment>
    )
  }
}
