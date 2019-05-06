import React from 'react'

export default class Key extends React.Component {

  // flashKey = () => {
  //   this.props.clearKey()
  //   if (this.state.background === "white") {
  //     this.setState({background: "blue"})
  //     setTimeout(()=> this.setState({background: "white"}), 500)
  //   }
  // } bad old way to do it

  render() {
    //if (this.props.currentKey === this.props.character) {this.flashKey()}
    return (
      <div style = {{height:"72px", width:"10%", border: "5px solid black", background:`${this.props.currentKeys.includes(this.props.character) ? "blue" : "white"}`, display:"table"}}>
        <h1 style = {{textAlign:"center", display:"table-cell", verticalAlign:"middle"}}> {this.props.character.toUpperCase()} </h1>
      </div>
    )
  }
}
