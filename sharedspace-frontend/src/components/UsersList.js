import React from 'react'

const UsersList = (props) => (
  <div style={{overflowY: "scroll", overflowX: "hidden"}}>
    <p>The users currently in this room are: </p>
    <ul>
      {props.users.map(user => (<li key={user}>{user}</li>))}
    </ul>
  </div>
)

export default UsersList
