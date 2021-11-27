const { getAll, getById, addContact, updateById, removeById, updateFavor } = require('./contacts')
const { auth, login, singout } = require('./auth')
module.exports = {
  getAll,
  getById,
  addContact,
  updateById,
  removeById,
  updateFavor,
  auth,
  login,
  singout
}
