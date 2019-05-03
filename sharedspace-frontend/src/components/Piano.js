import React, {Component} from 'react'
import a from '../media/piano/448546__tedagame__c3.ogg'
import w from '../media/piano/448538__tedagame__c-3.ogg'
import s from '../media/piano/448608__tedagame__d3.ogg'
import e from '../media/piano/448601__tedagame__d-3.ogg'
import d from '../media/piano/448614__tedagame__e3.ogg'
import f from '../media/piano/448589__tedagame__f3.ogg'
import t from '../media/piano/448584__tedagame__f-3.ogg'
import g from '../media/piano/448559__tedagame__g3.ogg'
import y from '../media/piano/448593__tedagame__g-3.ogg'
import h from '../media/piano/448562__tedagame__a3.ogg'
import u from '../media/piano/448570__tedagame__a-3.ogg'
import j from '../media/piano/448568__tedagame__b3.ogg'
import k from '../media/piano/448549__tedagame__c4.ogg'
import o from '../media/piano/448539__tedagame__c-4.ogg'
import l from '../media/piano/448609__tedagame__d4.ogg'
import p from '../media/piano/448602__tedagame__d-4.ogg'
import semiColon from '../media/piano/448613__tedagame__e4.ogg'

export default class Piano extends Component{

    a = new Audio(a)
    w = new Audio(w)
    s = new Audio(s)
    e = new Audio(e)
    d = new Audio(d)
    f = new Audio(f)
    t = new Audio(t)
    g = new Audio(g)
    y = new Audio(y)
    h = new Audio(h)
    u = new Audio(u)
    j = new Audio(j)
    k = new Audio(k)
    o = new Audio(o)
    l = new Audio(l)
    p = new Audio(p)
    q = new Audio(semiColon)

    handleClick = (e) => {
      if (!e.repeat) {
        const note = e.key
        this.playNote(note)
        //this.sendNote(note)
      }
    }

    playNote(note){
        const keys = ["a", "w", "s", "e", "d", "f", "t", "g", "y", "h", "u", "j", "k", "o", "l", "p"]
        if (note === ";"){
            this.q.pause()
            this.q.currentTime = 0
            this.q.play()
        } else if (keys.includes(note)) {
            this[note].pause()
            this[note].currentTime = 0
            this[note].play()
        }
    }



    // componentDidMount() {
    //     io.emit('piano', { roomID: this.state.roomID })

    //     // , roomMessages => {
    //     //     console.log(roomMessages)
    //     //     this.setState({ messages: roomMessages })
    //     //   })

    //     io.on('piano', )

    //   }

    render(){
        return(
            <div onKeyDown={(e) => this.handleClick(e)} tabIndex="0" >
                Piano <br></br>
                <div>
                    <div>
                        <img src={require("../media/pianoKeyboard.jpg")} alt="piano keyboard" height="100px"></img>
                    </div>
                    <div>
                        <img src={require("../media/computerKeyboard.jpg")} height="200px" alt="computer keyboard"></img>
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
