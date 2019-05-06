import React from 'react'

export default class Key extends React.Component {

  // flashKey = () => {
  //   this.props.clearKey()
  //   if (this.state.background === "white") {
  //     this.setState({background: "blue"})
  //     setTimeout(()=> this.setState({background: "white"}), 500)
  //   }
  // } bad old way to do it

//
// style = {{textAlign:"center", display:"table-cell", verticalAlign:"middle"}}
//
  render() {
    //if (this.props.currentKey === this.props.character) {this.flashKey()}
    return (
      <div className="key" style = {{border: `${this.props.character === "blank" ? "5px solid white" : "5px solid black"}`, background:`${this.props.currentKeys.includes(this.props.character) ? "blue" : "white"}`}}>

          <h1 className="keyContent"  style = {{textAlign:"center", display:"table-cell", verticalAlign:"middle"}}>{this.props.character === "blank" ? null : this.props.character.toUpperCase()} </h1>

      </div>
    )
  }
}
