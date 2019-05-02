const pry = require('pryjs')
const User = require('./models/User')
const io = require('socket.io')()

io.on('connection', socket => {
  console.log(socket)

  socket.on('messages.index', response => {
    console.log(response)

    Message.findAll()
    .then( messages => {
      const roomMessages = messages.filter(msg.roomID === response.roomID)
      console.log(roomMessages)
      respond()
    })
  })
})



io.listen(8080)
