import React from 'react'

export default class InstrumentSelector extends React.Component {


  possibleInstruments = ["piano", "drums"]

  render() {
    return (
      <ul>
        {this.possibleInstruments.map(inst => {
          return (
            <li onClick={() => this.props.selectInstrument(inst)} >{inst}</li>
          )
        })}
      </ul>
    )
  }
}
