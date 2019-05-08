import React from 'react'

export default class MusicOptions extends React.Component {

  render() {
    console.log(this.props)
    return (
      // <div>
      //   <li onClick={this.props.resetInstrument}>{this.props.chosenInstrument}</li>
      // </div>

      <div>
        <p>Click on selected instrument to reset:</p>
        <ul>
              <li onClick={this.props.resetInstrument}>{this.props.chosenInstrument}</li>
        </ul>
      </div>

      // <div>
      // <p>Selected instrument:</p>
      // <ul>
      //   {this.possibleInstruments.map(inst => {
      //     return (
      //       <li onClick={() => this.props.selectInstrument(inst)} >{inst}</li>
      //     )
      //   })}
      // </ul>
      // </div>
    )
  }
}
