import React, {Component} from 'react'
import {io} from '../components/ioConnection'
import DrumKey from '../components/DrumKey'

// import a_drums from '../media/Drums/241746__abhijitchirde__cymbol.wav' // think this file is bad, aiffs are huge it might be too big
// import s_drums from '../media/Drums/111202__corrodedmaster__bass.wav'
// import d_drums from '../media/Drums/111661__bigjoedrummer__tom-gretsch-cat-maple-14-floor-1.wav'
// import f_drums from '../media/Drums/173838__yellowtree__tom-high.wav'
// import j_drums from '../media/Drums/186621__snapper4298__tom-2.wav'
// import k_drums from '../media/Drums/187535__waveplay-old__crash-cymbol.wav'
// import l_drums from '../media/Drums/250530__waveplay-old__hi-hat.wav'
// import semiColon_drums from '../media/Drums/270156__theriavirra__04c-snare-smooth-cymba

window.io = io

export default class Drum extends Component{

    drumKeys=["i", "l", "x", "d", "j", "w", "a", "c"]


    state={
        currentKeys: []
      }

    handleClick = (e) => {
      e.preventDefault() // so space doesnt move the page
        if (!e.repeat) {
            const note = e.key
            this.sendNote(note)
        }
    }

    sendNote = (note) => {
        if (this.props.acceptableDrumNotes.includes(note) || note === " "){
            io.emit('drumSend', { note: note, room: this.props.roomID })
        }
    }

    render(){
        return(
            <div onKeyDown={(e) => this.handleClick(e)} tabIndex="0" >
                <br></br>
                <div>
                    <div id="drumContainer" style={{position: "relative", borderStyle: "solid", borderWidth: "1px"}}>
                        <img src={require("../media/Drumset.jpg")} alt="drum" width="100%" style={{opacity: "0.7"}}></img>
                        {/* <div style={{borderStyle: "solid", borderWidth: "2px"}}></div> */}
                        {/* {this.drumKeys.map(key => <DrumKey character={key} currentKeys={this.state.currentKeys}/>)} */}
                        <div className="drumKey" style={{position: "absolute", top: "24%", left: "12%", border: "2px solid black", background:"#ffffffa8", backgroundColor: "#ffffffa8"}}>
                            <h1 className="drumKeyContent">A</h1>
                        </div>
                        <div className="drumKey" style={{position: "absolute", top: "41%", left: "30%", border: "2px solid black", background:"#ffffffa8", backgroundColor: "#ffffffa8"}}>
                            <h1 className="drumKeyContent">X</h1>
                        </div>
                        <div className="drumKey" style={{position: "absolute", top: "3%", left: "26%", border: "2px solid black", background:"#ffffffa8", backgroundColor: "#ffffffa8"}}>
                            <h1 className="drumKeyContent">W</h1>
                        </div>
                        <div className="drumKey" style={{position: "absolute", top: "27%", left: "34%", border: "2px solid black", background:"#ffffffa8", backgroundColor: "#ffffffa8"}}>
                            <h1 className="drumKeyContent">D</h1>
                        </div>
                        <div className="drumKey" style={{position: "absolute", top: "27%", left: "56%", border: "2px solid black", background:"#ffffffa8", backgroundColor: "#ffffffa8"}}>
                            <h1 className="drumKeyContent">J</h1>
                        </div>
                        <div className="drumKey" style={{position: "absolute", top: "35%", left: "75%", border: "2px solid black", background:"#ffffffa8", backgroundColor: "#ffffffa8"}}>
                            <h1 className="drumKeyContent">L</h1>
                        </div>
                        <div className="drumKey" style={{position: "absolute", top: "12%", left: "83%", border: "2px solid black", background:"#ffffffa8", backgroundColor: "#ffffffa8"}}>
                            <h1 className="drumKeyContent">I</h1>
                        </div>
                        <div className="drumKey" style={{position: "absolute", top: "57%", left: "44.5%", border: "2px solid black", background:"#ffffffa8", backgroundColor: "#ffffffa8"}}>
                            <h1 className="drumKeyContent">C</h1>
                        </div>
                        
                    </div>

                </div>
            </div>
        )
    }

}
