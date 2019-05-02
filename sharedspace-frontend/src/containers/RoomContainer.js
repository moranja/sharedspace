import React from 'react'
import ChatContainer from './ChatContainer'
import ActivityContainer from './ActivityContainer'

export default class RoomContainer extends React.Component {


  render() {
    return (
      <div>
        <h1>Room Container</h1>
        <ChatContainer />
        <ActivityContainer />
      </div>
    )
  }
}
