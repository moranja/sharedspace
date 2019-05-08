import React, {Component} from 'react'
import PianoContainer from './PianoContainer'
import DrumContainer from './DrumContainer'
import GuitarContainer from './GuitarContainer'

export default class InstrumentContainer extends Component{

  renderInstrument = () => {
    if (this.props.chosenInstrument === "piano") {
      return(
        <PianoContainer roomID={this.props.roomID} acceptablePianoNotes={this.props.acceptablePianoNotes} playNote={this.props.playNote} />
      )
    } else if (this.props.chosenInstrument === "drums") {
      return(
        <DrumContainer roomID={this.props.roomID} acceptableDrumNotes={this.props.acceptableDrumNotes} playNote={this.props.playNote} />
      )
    } else if (this.props.chosenInstrument === "guitar") {
      return(
        <GuitarContainer roomID={this.props.roomID} acceptableGuitarNotes={this.props.acceptableGuitarNotes} playNote={this.props.playNote} />
      )
    } else {
      return(
        <h2 style={{textAlign: "center"}}>Please Select Your Instrument on the Right</h2>
      )
    }
  }

    render(){
        return(
            <div>
                {this.renderInstrument()}
            </div>
        )
    }
}
