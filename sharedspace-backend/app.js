const pry = require('pryjs')
const User = require('./models/User')
const Message = require('./models/Message')
const io = require('socket.io')()

io.on('connection', socket => {
  console.log(socket)

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

  socket.on('piano', (piano, response) => {
    console.log(piano)
    respond(response)
  })


})



io.listen(8080)

console.log("backend up and running!")
