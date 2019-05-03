const Message = require('./models/Message')
const User = require('./models/User')

Message.sync()

const messages = [
  {
    userID: 1,
    roomID: 1,
    content: "Hello 1"
  },
  {
    userID: 2,
    roomID: 1,
    content: "Hello 2"
  },
  {
    userID: 1,
    roomID: 1,
    content: "Hello 3"
  },
  {
    userID: 2,
    roomID: 1,
    content: "Hello 4"
  },
  {
    userID: 1,
    roomID: 2,
    content: "Hello 5"
  }
]

const users = [
  {
    username: "Adam",
    password: "password"
  },
  {
    username: "Mark",
    password: "password"
  }
]

Message.destroy({ where: {}}).then(res =>
  messages.forEach( message => Message.create(message))
)

User.destroy({ where: {}}).then(res =>
  users.forEach( user => {
    let newUser = User.create( {username: user.username} )
    newUser.password = user.password
  })
)
