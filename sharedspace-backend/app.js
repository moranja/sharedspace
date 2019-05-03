const User = require('./models/User')
const Message = require('./models/Message')
const express = require('express')
const cors = require('cors')
const io = require('socket.io')()
const app = express()

io.on('connection', socket => {

  console.log('connected')
  // console.log(socket.handshake.headers.authorization)
  //if the authorization is good, cool, if not close the socket

  // if (socket.handshake.headers.authorization) {
  //   let [ type, token ] = socket.handshake.headers.authorization.split(' ')
  //   let result = jwt.decode(token)
  //   console.log(result)
  //   let userID = result.id
  //
  //   // socket.on('messages.index', (room, respond) => {
  //   //   console.log(room)
  //   //
  //   //   Message.findAll()
  //   //   .then( messages => {
  //   //     const roomMessages = messages.filter(msg => msg.roomID === room.roomID)
  //   //     respond(roomMessages)
  //   //   })
  //   // })
  //   //
  //   // socket.on('messages.new', (message, respond) => {
  //   //   console.log(message)
  //   //   const roomID = message.roomID
  //   //
  //   //   Message.create(message)
  //   //
  //   //   Message.findAll()
  //   //   .then( messages => {
  //   //     const roomMessages = messages.filter(msg => msg.roomID === roomID)
  //   //     io.emit('messages.newMessageFromServer', roomMessages)
  //   //   })
  //   // })
  //   //
  //   // // socket.on('piano', (piano, response) => {
  //   // //   console.log(piano)
  //   // //   respond(response)
  //   // // })
  //   //
  //   // socket.on('pianoSend', (note) => {
  //   //   console.log(note)
  //   //   io.emit('pianoReceive', (note))
  //   // })
  // } else {
  //   //socket.close()
  // }

  socket.on('messages.index', (room, respond) => {
    console.log(room)

    Message.findAll()
    .then( messages => {
      const roomMessages = messages.filter(msg => msg.roomID === room.roomID)
      respond(roomMessages)
    })
  })

  socket.on('messages.new', (message, respond) => {
    console.log(message)
    const roomID = message.roomID

    Message.create(message)

    Message.findAll()
    .then( messages => {
      const roomMessages = messages.filter(msg => msg.roomID === roomID)
      io.emit('messages.newMessageFromServer', roomMessages)
    })
  })

  // socket.on('piano', (piano, response) => {
  //   console.log(piano)
  //   respond(response)
  // })

  socket.on('pianoSend', (note) => {
    console.log(note)
    io.emit('pianoReceive', (note))
  })

})


app.use(cors())


io.listen(8080)

console.log("backend up and running!")



// app.post('/login', async (req, res) => {
//   let users = User.findAll({
//     where: {
//       name: req.body.name
//     }
//   })
//   let user = users[0]
//   console.log(user)
//   if (user.authenticate(req.body.password)) {
//     res.json(user)
//   }
// })
