const { Contact } = require('../../model')
const { NotFound } = require('http-errors')

const removeById = async (req, res) => {
  const { contactId } = req.params
  const result = await Contact.findOneAndRemove(contactId)
  if (!result) {
    throw new NotFound('Not Found')
  }
  res.json({
    status: 'success',
    code: 200,
    message: 'remove success'
  })
}

module.exports = removeById
