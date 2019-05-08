import React from 'react'

export default class DrumKey extends React.Component {


  render() {
    return (
      <div className="drumKey" style={{position: "absolute", border: `${this.props.character === "blank" ? "#ffffff00" : "2px solid black"}`, background:`${this.props.currentKeys.includes(this.props.character) ? "blue" : "#ffffffa8"}`, backgroundColor: `${this.props.character === "blank" ? "#ffffff00" : "#ffffffa8"}`,}}>
        <h1 className="drumKeyContent"  style = {{textAlign:"center", display:"table-cell", verticalAlign:"middle"}}>{this.props.character === "blank" ? null : this.props.character.toUpperCase()} </h1>
      </div>
    )
  }
}
