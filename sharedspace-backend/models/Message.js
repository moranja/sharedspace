const Sequelize = require('sequelize')
const { STRING, INTEGER } = Sequelize

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
})

const Message = sequelize.define('message', {
  userID: {
    type: INTEGER
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
