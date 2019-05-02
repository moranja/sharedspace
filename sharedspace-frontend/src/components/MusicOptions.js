import React from 'react'

export default class MusicOptions extends React.Component {

  render() {
    return (
      <div>
        <h1 onClick={this.props.resetInstrument}>{this.props.selectedInstrument}</h1>
      </div>
    )
  }
}
