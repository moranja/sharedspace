const pry = require('pryjs')
const User = require('./models/User')
const Message = require('./models/Message')
const io = require('socket.io')()

io.on('connection', socket => {
  console.log(socket)

  socket.on('messages.index', response => {
    console.log(response)

    Message.findAll()
    .then( messages => {
      const roomMessages = messages.filter(msg => msg.roomID === response.roomID)
      console.log("this is working, I promise")
      //respond()
    })
  })
})



io.listen(8080)

console.log("backend up and running!")