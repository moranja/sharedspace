const User = require('./models/User')
const Message = require('./models/Message')
const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const pry = require('pryjs')
const socketIo = require('socket.io')
const jwt = require('jsonwebtoken')

const io = socketIo(8080,  {
    handlePreflightRequest: function (req, res) {
        var headers = {
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Credentials': true
        }
        res.writeHead(200, headers)
        res.end()
    }
})

app.use(bodyParser())

io.on('connection', socket => {
console.log("trying to connect")
  //if the authorization is good, cool, if not close the socket
  console.log("attempting to connect")

  if (socket.handshake.headers.authorization !== "Bearer null") {
    console.log(socket.handshake.headers.authorization)
    let [ type, token ] = socket.handshake.headers.authorization.split(' ')
    let result = jwt.decode(token)
    let userID = result.id

    socket.on('room', (roomID) => {
      socket.join(`room_${roomID}`)
    })

    socket.on('messages.index', (room, respond) => {
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

    socket.on('pianoSend', (obj) => {
      io.sockets.in(`room_${obj.room}`).emit('pianoReceive', (`${obj.note}_piano`))
    })

    socket.on('drumSend', (obj) => {
      io.sockets.in(`room_${obj.room}`).emit('drumReceive', (`${obj.note}_drums`))
    })

    socket.on('playVideo', (obj) => {
      console.log(obj)
      io.sockets.in(`room_${obj.room}`).emit('playVideoForAll', ("test"))
    })

    socket.on('pauseVideo', (obj) => {
      console.log(obj)
      io.sockets.in(`room_${obj.room}`).emit('pauseVideoForAll', ("test"))
    })

  } else {
    console.log("shutting this socket down")
    io.close()
  }
})


app.use(cors())


io.listen(8081)




app.post('/createUser', (req, res) => {
  newUser = User.build({username: req.body.username})
  newUser.password = req.body.password
  // eval(pry.it)
  newUser.save()
  .then(newUser => res.json(newUser.toJSON()))
  .catch(error => res.json({validationError: error.errors[0].path}))
})

app.post('/login', (req, res) => {
  // eval(pry.it)
  User.findOne({ where: {username: req.body.username} })
  .then(user => {
    // console.log(user)
    if (user == null){
      res.json("Username")
    } else {
      if (user.authenticate(req.body.password)) {
        res.json(user.toJSON())
      } else {
        res.json("Password")
      }
    }
  })
.catch(error => {
  console.log(error)
})
})

app.listen(3001)

console.log("backend up and running!")

// User.findOne({ where: {username: "adam12"} }).then(user => console.log(user))

// user = User.build({username: "adam12"})
// user.password = "adam12"
// $2b$05$bl9KVhiBUWObZg2hoSBF6OOIyuXS3clWRd0mu1d.O9HLHkxZT/a7G
// user.save().then(res => console.log(res))
// User.findOne({ where: {username: "adam12"} }).then(user => console.log(user))
// User.findAll().then(res => console.log(res))
// User.findOne({ where: {username: "adam12"} }).then(user => console.log(user.authenticate("adam12")))


