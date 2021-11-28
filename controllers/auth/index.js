const auth = require('./register')
const login = require('./login')
const singout = require('./singout')
const updateUserAvatar = require('./updateAvatar')
const verify = require('./verify')
const verifyAgain = require('./verifyAgain')

module.exports = {
  auth,
  login,
  singout,
  updateUserAvatar,
  verify,
  verifyAgain
}
