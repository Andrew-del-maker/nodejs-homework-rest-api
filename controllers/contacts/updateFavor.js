const { Contact } = require('../../model')
const { NotFound } = require('http-errors')

const updateFavor = async(req, res) => {
  const { contactId } = req.params
  const { favorite } = req.body
  const { _id } = req.user
  const result = await Contact.find({ owner: _id }).findByIdAndUpdate(contactId, { favorite }, { new: true })
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
}

module.exports = updateFavor
