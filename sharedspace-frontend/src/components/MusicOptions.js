import React from 'react'

const MusicOptions = (props) => (
  <React.Fragment>
    <p>Click on selected instrument to reset:</p>
    <ul>
          <li onClick={this.props.resetInstrument}>{this.props.chosenInstrument}</li>
    </ul>
  </React.Fragment>
)

export default MusicOptions
