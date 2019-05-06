const { STRING, INTEGER } = require('sequelize')
const sequelize = require('./sequelize')

const Message = sequelize.define('message', {
  userID: {
    type: INTEGER
  },
  username: {
    type: STRING
  },
  roomID: {
    type: INTEGER
  },
  content: {
    type: STRING
  }
})

module.exports = Message

sequelize.sync()
