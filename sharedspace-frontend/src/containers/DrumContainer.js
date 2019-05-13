import React, {Component} from 'react'
import {io} from '../components/ioConnection'
import DrumKey from '../components/DrumKey'

window.io = io

export default class DrumContainer extends Component{

    drumKeys =[   //keys & positions
        {character: "A",
        top: "25%",
        left: "13%"},
        {character: "X",
        top: "42%",
        left: "31%"},
        {character: "W",
        top: "4%",
        left: "27%"},
        {character: "D",
        top: "28%",
        left: "35%"},
        {character: "J",
        top: "28%",
        left: "57%"},
        {character: "L",
        top: "36%",
        left: "76%"},
        {character: "I",
        top: "13%",
        left: "84%"},
        {character: "C",
        top: "59%",
        left: "45.5%"},
    ]

    state={
        currentKeys: []
      }

    handleKeyDown = (e) => {
        e.preventDefault()
        if (!e.repeat) {
            const note = e.key
            this.sendNote(note)
            this.setState({currentKeys: [...this.state.currentKeys, e.key.toUpperCase()]})
        }
      }

      handleKeyUp = (e) => {
        e.persist()
        let newKeys = [...this.state.currentKeys].filter(k => k !== e.key.toUpperCase())
        this.setState({currentKeys: [...newKeys]})
      }

    sendNote = (note) => {
        if (this.props.acceptableDrumNotes.includes(note) || note === " "){
            io.emit('drumSend', { note: note, room: this.props.roomID })
        }
    }

    render(){
        return(
            <div onKeyDown={this.handleKeyDown} onKeyUp={this.handleKeyUp}  tabIndex="0" >
                <br></br>
                <div>
                    <div id="drumContainer" style={{width: "95%", position: "relative", margin: "auto"}}>
                        <img src={require("../media/Drumset.jpg")} alt="drum" width="100%" style={{opacity: "0.7"}}></img>
                        {this.drumKeys.map(key => <DrumKey key={key.character} {...key} currentKeys={this.state.currentKeys}/>)}
                    </div>

                </div>
            </div>
        )
    }

}
