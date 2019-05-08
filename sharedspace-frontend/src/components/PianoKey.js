import React from 'react'

const PianoKey = (props) => (
  <div className="key" style={{border: `${props.character === "blank" ? "#ffffff00" : "2px solid black"}`, background:`${props.currentKeys.includes(props.character) ? "blue" : "#ffffffa8"}`, backgroundColor: `${props.character === "blank" ? "#ffffff00" : "#ffffffa8"}`,}}>
    <h1 className="keyContent" >{props.character === "blank" ? null : props.character.toUpperCase()} </h1>
  </div>
)

export default PianoKey
