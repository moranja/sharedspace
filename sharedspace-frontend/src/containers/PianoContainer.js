import React, {Component} from 'react'
import PianoKey from '../components/PianoKey'
import {io} from '../components/ioConnection'

window.io = io

export default class PianoContainer extends Component{

    state={
      currentKeys: []
    }

    topRowKeys=["w", "e", "blank", "t", "y", "u", "blank", "o", "p"]
    bottomRowKeys=["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"]

    handleKeyDown = (e) => {
      e.preventDefault()
      if (!e.repeat) {
          const note = e.key
          this.sendNote(note)
          this.setState({currentKeys: [...this.state.currentKeys, e.key]})
      }
    }

    handleKeyUp = (e) => {
      e.persist()
      let newKeys = [...this.state.currentKeys].filter(k => k !== e.key)
      this.setState({currentKeys: [...newKeys]})
    }

    sendNote = (note) => {
        if (this.props.acceptablePianoNotes.includes(note) || note === " "){
            io.emit('pianoSend', { note: note, room: this.props.roomID })
        }
    }

    render(){
      return(
        <div onKeyDown={this.handleKeyDown} onKeyUp={this.handleKeyUp} tabIndex="0">
          <br></br>
          <div>
            <div>
                <img src={require("../media/pianoKeyboard.jpg")} alt="piano keyboard" width="100%" style={{opacity: "0.7"}}></img>
            </div>
            <div>
              <div className="ui grid">
                <div className="row">
                  <div className="halfKey" />
                    {this.topRowKeys.map(key => <PianoKey character={key} key={key} currentKeys={this.state.currentKeys}/>)}
                  <div className="halfKey" />
                </div>
                <div className="row">
                  {this.bottomRowKeys.map(key => <PianoKey character={key} key={key} currentKeys={this.state.currentKeys}/>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
}
