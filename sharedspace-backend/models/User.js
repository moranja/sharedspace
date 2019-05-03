const { STRING, Model } = require('sequelize')
const sequelize = require('./sequelize')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class User extends Model {

  authenticate(password) {
    return bcrypt.compareSync(password, this.password_digest)
  }

  //equivalent to has secure password in rails
  set password(value) {
    let salt = bcrypt.genSaltSync(5)
    let hash = bcrypt.hashSync(value, salt)
    this.password_digest = hash
    console.log(hash)
    // bcrypt.genSalt(5, (err, salt) => {
    //   bcrypt.hash(value, salt, (err, hash) => {
    //     this.password_digest = hash
    //     console.log(hash)
    //     this.save()
    //   })
    // })
  }

  get token() {
    return jwt.sign({ id: this.id }, 'random-secret')
  }

  toJSON(){
    let jsonObject = { ...this.dataValues, token: this.token }
    delete jsonObject.password_digest
    return jsonObject
    // return {
    //   username: this.name,
    //   token: this.token
    // }
  }

}

User.init({
  username: {
    type: STRING
  },
  password_digest: {
    type: STRING
  }
}, {sequelize, modelName: 'user'} )

module.exports = User

sequelize.sync()
