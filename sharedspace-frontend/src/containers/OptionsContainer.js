import React from 'react'
import InstrumentSelector from '../components/InstrumentSelector'
import MusicOptions from '../components/MusicOptions'

export default class OptionsContainer extends React.Component {

  render() {
    return (
      <div>
        {!this.props.selectedInstrument ? <InstrumentSelector selectInstrument={this.props.selectInstrument}/> : <MusicOptions selectedInstrument={this.props.selectedInstrument} resetInstrument={this.props.resetInstrument}/>}
      </div>
    )
  }
}
