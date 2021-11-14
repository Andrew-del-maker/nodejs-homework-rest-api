const getAll = require('./getAll')
const getContactById = async (contactId) => {
  const contacts = await getAll()
  const idx = contacts.findIndex(item => item.id === contactId)
  if (idx === -1) {
    return null
  }
  return contacts[idx]
}

module.exports = getContactById
