import React, {Component} from 'react'
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
//Guitar sounds
import a_guitar from '../media/guitar/467662__allan764__9-c3.flac'
import w_guitar from '../media/guitar/467649__allan764__10-c-3.flac'
import s_guitar from '../media/guitar/467648__allan764__11-d3.flac'
import e_guitar from '../media/guitar/467647__allan764__12-d-3.flac'
import d_guitar from '../media/guitar/467654__allan764__13-e3.flac'
import f_guitar from '../media/guitar/467653__allan764__14-f3.flac'
import t_guitar from '../media/guitar/467652__allan764__15-f-3.flac'
import g_guitar from '../media/guitar/467651__allan764__16-g3.flac'
import y_guitar from '../media/guitar/467656__allan764__17-g-3.flac'
import h_guitar from '../media/guitar/467655__allan764__18-a3.flac'
import u_guitar from '../media/guitar/467675__allan764__19-a-3.flac'
import j_guitar from '../media/guitar/467673__allan764__20-b3.flac'
import k_guitar from '../media/guitar/467672__allan764__21-c4.flac'
import o_guitar from '../media/guitar/467679__allan764__22-c-4.flac'
import l_guitar from '../media/guitar/467678__allan764__23-d4.flac'
import p_guitar from '../media/guitar/467677__allan764__24-d-4.flac'
import semiColon_guitar from '../media/guitar/467676__allan764__25-e4.flac'

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

  a_guitar = new Audio(a_guitar)
  w_guitar = new Audio(w_guitar)
  s_guitar = new Audio(s_guitar)
  e_guitar = new Audio(e_guitar)
  d_guitar = new Audio(d_guitar)
  f_guitar = new Audio(f_guitar)
  t_guitar = new Audio(t_guitar)
  g_guitar = new Audio(g_guitar)
  y_guitar = new Audio(y_guitar)
  h_guitar = new Audio(h_guitar)
  u_guitar = new Audio(u_guitar)
  j_guitar = new Audio(j_guitar)
  k_guitar = new Audio(k_guitar)
  o_guitar = new Audio(o_guitar)
  l_guitar = new Audio(l_guitar)
  p_guitar = new Audio(p_guitar)
  q_guitar = new Audio(semiColon_guitar)

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
    drums: ["i", "l", "x", "d", "j", "w", "a", "c"],
    guitar: ["a", "w", "s", "e", "d", "f", "t", "g", "y", "h", "u", "j", "k", "o", "l", "p", ";"]
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

    io.on('guitarReceive', note => {
      this.playNote(note, "guitar")
    })
  }

  render(){
      return(
          <React.Fragment>
              <InstrumentContainer
                chosenInstrument={this.props.chosenInstrument}
                acceptablePianoNotes={this.acceptableNotes.piano}
                acceptableDrumNotes={this.acceptableNotes.drums}
                acceptableGuitarNotes={this.acceptableNotes.guitar}
                playNote={this.playNote}
                roomID={this.props.roomID}
                />
          </React.Fragment>
      )
  }
}
