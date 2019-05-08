import React from 'react'

export default class InstrumentSelector extends React.Component {


  possibleInstruments = ["piano", "drums"]

  render() {
    return (
      <ul>Select an instrument from the list:
        {this.possibleInstruments.map(inst => {
          return (
            <li key={inst} onClick={() => this.props.selectInstrument(inst)} >{inst}</li>
          )
        })}
      </ul>
    )
  }

}
