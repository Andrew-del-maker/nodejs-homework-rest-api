const { NotFound } = require('http-errors')
const { Contact } = require('../../model')

const getById = async (req, res) => {
  const { contactId } = req.params
  const { _id } = req.user
  const result = await Contact.findById(contactId).find({ owner: _id })
  if (!result) {
    throw new NotFound(`You have no contacts with id=${contactId}`)
  }
  res.json({
    status: 'success',
    code: 200,
    message: {
      result
    }
  })
}

module.exports = getById
