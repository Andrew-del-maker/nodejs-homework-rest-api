const gravatar = require('gravatar')
const { Contact } = require('../../model')
const fs = require('fs/promises')
const path = require('path')

const contactsDir = path.join(__dirname, '../../public/contactsAvatar')

const addContact = async (req, res) => {
  const avatar = gravatar.url(`${req.body.email}`)
  const newContact = { ...req.body, owner: req.user._id, avatar }
  const result = await Contact.create(newContact)
  const contactFolder = path.join(contactsDir, String(result._id))
  await fs.mkdir(contactFolder)
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result
    }
  })
}

module.exports = addContact
