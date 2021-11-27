const { Contact } = require('../../model')
const { NotFound } = require('http-errors')

const removeById = async (req, res) => {
  const { contactId } = req.params
  const { _id } = req.user
  const result = await Contact.find({ owner: _id }).findOneAndRemove(contactId)
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
