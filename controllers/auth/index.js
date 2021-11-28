const auth = require('./register')
const login = require('./login')
const singout = require('./singout')
const updateUserAvatar = require('./updateAvatar')

module.exports = {
  auth,
  login,
  singout,
  updateUserAvatar
}
