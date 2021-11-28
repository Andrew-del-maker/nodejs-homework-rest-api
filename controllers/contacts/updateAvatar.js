const fs = require('fs/promises')
const path = require('path')
const { Contact } = require('../../model')
const { NotFound } = require('http-errors')

const contactsDir = path.join(__dirname, '../../public/contactsAvatar')

const updateAvatar = async(req, res) => {
  const { contactId } = req.params
  const { path: tempUpload, originalname } = req.file
  try {
    const resultUpload = path.join(contactsDir, contactId, `${contactId}_${originalname}`)
    await fs.rename(tempUpload, resultUpload)
    const avatar = path.join('/public', contactId, `${contactId}_${originalname}`)
    const result = await Contact.findByIdAndUpdate(contactId, { avatar }, { new: true })
    if (!result) {
      throw new NotFound('Not found')
    }
    res.json({
      status: 'success',
      code: 200,
      data: {
        result
      }
    })
  } catch (error) {
    await fs.unlink(tempUpload)
    throw error
  }
}

module.exports = updateAvatar
