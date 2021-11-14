const { v4 } = require('uuid')
const getAll = require('./getAll')
const updateContacts = require('./updateContacts')
const addContact = async (data) => {
  const contacts = await getAll()
  const newContact = { ...data, id: v4() }
  contacts.push(newContact)
  await updateContacts(contacts)
  return contacts
}
module.exports = addContact
