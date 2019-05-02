const Message = require('./models/Message')

Message.sync()

Message.destroy({ where: {roomID: [1]}})

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

messages.forEach( message => Message.create(message))
