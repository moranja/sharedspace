import React from 'react'

export default class DrumKey extends React.Component {

  render() {
    return (
      <div className="drumKey" style={{position: "absolute", top: `${this.props.top}`, left: `${this.props.left}`, border: "2px solid black", background:`${this.props.currentKeys.includes(this.props.character) ? "blue" : "#ffffffa8"}`, backgroundColor: "#ffffffa8"}}>
        <h1 className="drumKeyContent">{this.props.character}</h1>
      </div>
    )
  }
}
