import React from 'react'
import RoomContainer from './containers/RoomContainer'

// fetch('http://localhost:3001/login', {
//   method: "POST",
//   headers: {
//     'Content-Type' : 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'Adam',
//     password: 'password'
//   })
// })
// .then( res => res.json())
// .then( user => {
//   transportOptions: {
//     polling: {
//       extraHeaders :{
//         'Authorization' : `Bearer ${localStorage.getItem('token')}`
//       }
//     }
//   }
// })

export default class App extends React.Component {


  render (){
      return (
      <div className="ui container">
        <h1>Shared Space</h1>
        <br></br>
        <RoomContainer />
      </div>
    )
  }
}
