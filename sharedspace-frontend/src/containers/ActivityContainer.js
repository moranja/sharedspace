import React, {Component} from 'react'
import ViewContainer from './ViewContainer'
import InstrumentContainer from './InstrumentContainer'
// Piano sounds
import a_piano from '../media/piano/448546__tedagame__c3.ogg'
import w_piano from '../media/piano/448538__tedagame__c-3.ogg'
import s_piano from '../media/piano/448608__tedagame__d3.ogg'
import e_piano from '../media/piano/448601__tedagame__d-3.ogg'
import d_piano from '../media/piano/448614__tedagame__e3.ogg'
import f_piano from '../media/piano/448589__tedagame__f3.ogg'
import t_piano from '../media/piano/448584__tedagame__f-3.ogg'
import g_piano from '../media/piano/448559__tedagame__g3.ogg'
import y_piano from '../media/piano/448593__tedagame__g-3.ogg'
import h_piano from '../media/piano/448562__tedagame__a3.ogg'
import u_piano from '../media/piano/448570__tedagame__a-3.ogg'
import j_piano from '../media/piano/448568__tedagame__b3.ogg'
import k_piano from '../media/piano/448549__tedagame__c4.ogg'
import o_piano from '../media/piano/448539__tedagame__c-4.ogg'
import l_piano from '../media/piano/448609__tedagame__d4.ogg'
import p_piano from '../media/piano/448602__tedagame__d-4.ogg'
import semiColon_piano from '../media/piano/448613__tedagame__e4.ogg'
// Drum sounds
import i_drums from '../media/Drums/241746__abhijitchirde__cymbol.wav'
import c_drums from '../media/Drums/111661__bigjoedrummer__tom-gretsch-cat-maple-14-floor-1.wav'
import x_drums from '../media/Drums/270156__theriavirra__04c-snare-smooth-cymbals-snares.wav'
import d_drums from '../media/Drums/173838__yellowtree__tom-high.wav'
import j_drums from '../media/Drums/186621__snapper4298__tom-2.wav'
import w_drums from '../media/Drums/187535__waveplay-old__crash-cymbol.wav'
import a_drums from '../media/Drums/250530__waveplay-old__hi-hat.wav'
import l_drums from '../media/Drums/111202__corrodedmaster__bass.wav'



import {io} from '../components/ioConnection'

window.io = io



export default class ActivityContainer extends Component{

  a_piano = new Audio(a_piano)
  w_piano = new Audio(w_piano)
  s_piano = new Audio(s_piano)
  e_piano = new Audio(e_piano)
  d_piano = new Audio(d_piano)
  f_piano = new Audio(f_piano)
  t_piano = new Audio(t_piano)
  g_piano = new Audio(g_piano)
  y_piano = new Audio(y_piano)
  h_piano = new Audio(h_piano)
  u_piano = new Audio(u_piano)
  j_piano = new Audio(j_piano)
  k_piano = new Audio(k_piano)
  o_piano = new Audio(o_piano)
  l_piano = new Audio(l_piano)
  p_piano = new Audio(p_piano)
  q_piano = new Audio(semiColon_piano)

  i_drums = new Audio(i_drums)
  l_drums = new Audio(l_drums)
  x_drums = new Audio(x_drums)
  d_drums = new Audio(d_drums)
  j_drums = new Audio(j_drums)
  w_drums = new Audio(w_drums)
  a_drums = new Audio(a_drums)
  c_drums = new Audio(c_drums)
  acceptableNotes = {
    piano: ["a", "w", "s", "e", "d", "f", "t", "g", "y", "h", "u", "j", "k", "o", "l", "p", ";"],
    drums: ["i", "l", "x", "d", "j", "w", "a", "c"]
  }

  playNote(note, instrument){
    if (note === `;_${instrument}`){
        this[`q_${instrument}`].pause()
        this[`q_${instrument}`].currentTime = 0
        this[`q_${instrument}`].play()
    } else if (note===` _${instrument}`) {
        this.acceptableNotes[instrument].forEach( note => {
          if (note === ";") {
            this[`q_${instrument}`].pause()
            this[`q_${instrument}`].currentTime = 0
          } else {
            this[`${note}_${instrument}`].pause()
            this[`${note}_${instrument}`].currentTime = 0
          }
        })
    } else {
        this[note].pause()
        this[note].currentTime = 0
        this[note].play()
    }
  }

  componentDidMount() {
    io.on('pianoReceive', note => {
      this.playNote(note, "piano")
    })

    io.on('drumReceive', note => {
      this.playNote(note, "drums")
    })
  }

  render(){
      return(
          <React.Fragment>
              <ViewContainer />
              <InstrumentContainer
                chosenInstrument={this.props.chosenInstrument}
                acceptablePianoNotes={this.acceptableNotes.piano}
                acceptableDrumNotes={this.acceptableNotes.drums}
                playNote={this.playNote}
                roomID={this.props.roomID}
                />
          </React.Fragment>
      )
  }
}
