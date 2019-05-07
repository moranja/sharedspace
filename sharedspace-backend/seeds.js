const Message = require('./models/Message')
const User = require('./models/User')

const messages = [
  {
    userID: 1,
    username: "Adam",
    roomID: 1,
    content: "Hello 1"
  },
  {
    userID: 2,
    username: "Mark",
    roomID: 1,
    content: "Hello 2"
  },
  {
    userID: 1,
    username: "Adam",
    roomID: 1,
    content: "Hello 3"
  },
  {
    userID: 2,
    username: "Mark",
    roomID: 1,
    content: "Hello 4"
  },
  {
    userID: 1,
    username: "Adam",
    roomID: 2,
    content: "Hello 5"
  }
]

const users = [
  {
    username: "Adam",
    password: "1234"
  },
  {
    username: "Mark",
    password: "1234"
  }
]

Message.drop()
.then(res => Message.sync())
.then(res =>
  messages.forEach( message => Message.create(message))
)


User.drop()
.then(res => User.sync())
.then(res =>
  users.forEach( user => {
    let newUser = User.build( {username: user.username} )
    newUser.password = user.password
    newUser.save()
  })
)
