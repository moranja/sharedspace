import React, {Component} from 'react'
import Piano from '../components/Piano.js'
import Drum from '../components/Drum.js'

export default class InstrumentContainer extends Component{

  renderInstrument = () => {
    if (this.props.chosenInstrument === "piano") {
      return(
        <Piano roomID={this.props.roomID} acceptablePianoNotes={this.props.acceptablePianoNotes} playNote={this.props.playNote} />
      )
    } else if (this.props.chosenInstrument === "drums") {
      return(
        <Drum roomID={this.props.roomID} acceptableDrumNotes={this.props.acceptableDrumNotes} playNote={this.props.playNote} />
      )
    } else {
      return(
        <h1 style={{textAlign: "center"}}>Please Select Your Instrument</h1>
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
