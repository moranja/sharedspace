import React, {Component} from 'react'
import Key from '../components/Key'
import io from '../components/ioConnection'

window.io = io

export default class Piano extends Component{

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
            io.emit('pianoSend', { note: note })
        }
    }

    render(){
      console.log(this.state)
        return(
            <div onKeyDown={this.handleKeyDown} onKeyUp={this.handleKeyUp} tabIndex="0" >
                Piano is here<br></br>
                <div>
                    <div>
                        <img src={require("../media/pianoKeyboard.jpg")} alt="piano keyboard" width="100%"></img>
                    </div>
                    <div>
                        <div className="ui grid">
                          <div className="row">
                            <div className="halfKey" />
                            {this.topRowKeys.map(key => <Key character={key} currentKeys={this.state.currentKeys}/>)}
                            <div className="halfKey" />
                          </div>
                          <div className="row">
                            {this.bottomRowKeys.map(key => <Key character={key} currentKeys={this.state.currentKeys}/>)}
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


//Notes below show key bindings for note reference
    // a = C3
    // w = C#3 / Db3
    // s = D3
    // e = D#3 / Fb3
    // d = E3
    // f = F3
    // t = F#3 / Gb
    // g = G3
    // y = G#3 / Ab3
    // h = A3
    // u = A#3 / Bb3
    // j = B3
    // k = C4
    // o = C#4 / Db4
    // l = D4
    // p = D#4 / Eb4
    // ; = E4

        // switch (e.key){
        //     case "a": this[e.key].play(); break
        //     case "w": this.w.play(); break
        //     case "s": this.s.play(); break
        //     case "e": this.e.play(); break
        //     case "d": this.d.play(); break
        //     case "f": this.f.play(); break
        //     case "t": this.t.play(); break
        //     case "g": this.g.play(); break
        //     case "y": this.y.play(); break
        //     case "h": this.h.play(); break
        //     case "u": this.u.play(); break
        //     case "j": this.j.play(); break
        //     case "k": this.k.play(); break
        //     case "o": this.o.play(); break
        //     case "l": this.l.play(); break
        //     case "p": this.p.play(); break
        //     case ";": this.q.play(); break
        //     default:
        //         console.log("no matches")
        // }

            // a = C3
    // w = C#3 / Db3
    // s = D3
    // e = D#3 / Fb3
    // d = E3
    // f = F3
    // t = F#3
    // g = G3
    // y = G#3 / Ab3
    // h = A3
    // u = A#3 / Bb3
    // j = B3
    // k = C4
    // o = C#4 / Db4
    // l = D4
    // p = D#4 / Eb4
    // ; = E4
