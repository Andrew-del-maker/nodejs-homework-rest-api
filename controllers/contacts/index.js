const getAll = require('./getAll')
const getById = require('./getById')
const addContact = require('./addContact')
const updateById = require('./updateById')
const removeById = require('./removeById')
const updateFavor = require('./updateFavor')
const updateAvatar = require('./updateAvatar')

module.exports = {
  getAll,
  addContact,
  getById,
  updateById,
  removeById,
  updateFavor,
  updateAvatar
}
