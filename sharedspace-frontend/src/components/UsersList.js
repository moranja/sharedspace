import React from 'react'

const UsersList = (props) => (
  <div>
    <p>The users currently in this room are: </p>
    <ul>
      {props.users.map(user => (<li>{user}</li>))}
    </ul>
  </div>
)






export default UsersList
