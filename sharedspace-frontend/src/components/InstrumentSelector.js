import React from 'react'

export default class InstrumentSelector extends React.Component {


  possibleInstruments = ["piano", "drums"]

  render() {
    return (
      <div>
        <p>Select an instrument from the list:</p>
        <ul>
          {this.possibleInstruments.map(inst => {
            return (
              <li key={inst} onClick={() => this.props.selectInstrument(inst)} >{inst}</li>
            )
          })}
        </ul>
      </div>
    )
  }

}
