import React, {Component} from 'react'
import {io} from '../components/ioConnection'

window.io = io

export default class Drum extends Component{

    handleClick = (e) => {
      e.preventDefault() // so space doesnt move the page
        if (!e.repeat) {
            const note = e.key
            this.sendNote(note)
        }
    }

    sendNote = (note) => {
        if (this.props.acceptableDrumNotes.includes(note) || note === " "){
            io.emit('drumSend', { note: note })
        }
    }

    render(){
        return(
            <div onKeyDown={(e) => this.handleClick(e)} tabIndex="0" >
                drum <br></br>
                <div>
                    <div>
                        <img src={require("../media/Drumset.jpg")} alt="drum" width="100%"></img>
                    </div>
                    <div>
                        <img src={require("../media/computerKeyboard.png")} width="100%" alt="computer keyboard"></img>
                    </div>
                </div>
            </div>
        )
    }

}
