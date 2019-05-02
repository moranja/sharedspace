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
})



io.listen(8080)
