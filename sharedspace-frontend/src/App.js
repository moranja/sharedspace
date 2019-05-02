import React from 'react'
import RoomContainer from './containers/RoomContainer'

export default class App extends React.Component {



  render (){
      return (
      <div className="App">
        <h1>Shared Space</h1>
        <RoomContainer />
      </div>
    )
  }
}
