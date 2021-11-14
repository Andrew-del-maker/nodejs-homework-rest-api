const Joi = require('joi')
const { Schema, model } = require('mongoose')

const contactSchema = Schema({
  name: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 8
  },
  email: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 16
  },
  phone: {
    type: Number,
    required: true,
    minlength: 5,
    maxlength: 9
  },
  favorite: {
    type: Boolean,
    required: true
  }
}, { versionKey: false, timetamps: true })

const joiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  phone: Joi.number().required(),
  favorite: Joi.boolean().required()
})

const Contact = model('contact', contactSchema)

module.exports = {
  Contact,
  joiSchema
}
