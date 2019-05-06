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

  //if the authorization is good, cool, if not close the socket

  if (socket.handshake.headers.authorization !== "Bearer null") {
    console.log(socket.handshake.headers.authorization)
    let [ type, token ] = socket.handshake.headers.authorization.split(' ')
    let result = jwt.decode(token)
    let userID = result.id

    socket.on('messages.index', (room, respond) => {
      Message.findAll()
      .then( messages => {
        const roomMessages = messages.filter(msg => msg.roomID === room.roomID)
        respond(roomMessages)
      })
    })

    socket.on('messages.new', (message, respond) => {
      const roomID = message.roomID
      Message.create(message)
      Message.findAll()
      .then( messages => {
        const roomMessages = messages.filter(msg => msg.roomID === roomID)
        io.emit('messages.newMessageFromServer', roomMessages)
      })
    })

    socket.on('pianoSend', (note) => {
      console.log(note)
      io.emit('pianoReceive', (`${note.note}_piano`))
    })

    socket.on('drumSend', (note) => {
      console.log(note)
      io.emit('drumReceive', (`${note.note}_drums`))

    })
  } else {
    console.log("shutting this socket down")
    io.close()
  }
})


app.use(cors())


io.listen(8080)




app.post('/createUser', (req, res) => {
  newUser = User.build({username: req.body.username})
  newUser.password = req.body.password
  newUser.save().then(newUser => res.json(newUser.toJSON()))
})

app.post('/login', (req, res) => {
  User.findOne({ where: {username: req.body.username} }).then(user => {
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
})

app.listen(3001)

console.log("backend up and running!")