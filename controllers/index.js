const { getAll, getById, addContact, updateById, removeById, updateFavor, updateAvatar } = require('./contacts')
const { auth, login, singout, updateUserAvatar, verify, verifyAgain } = require('./auth')
module.exports = {
  getAll,
  getById,
  addContact,
  updateById,
  removeById,
  updateFavor,
  auth,
  login,
  singout,
  updateAvatar,
  updateUserAvatar,
  verify,
  verifyAgain
}
