const gravatar = require('gravatar')
const fs = require('fs/promises')
const path = require('path')
const { Conflict } = require('http-errors')
const { User } = require('../../model')
const userDir = path.join(__dirname, '../../public/users')

const auth = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict(`User with email ${email} already exist`)
  }
  const avatar = gravatar.url(`${email}`)
  const newUser = new User({ email, avatar })
  newUser.setPassword(password)
  await newUser.save()
  const userFolder = path.join(userDir, String(newUser._id))
  await fs.mkdir(userFolder)
  res.status(201).json({
    status: 'success',
    code: 201,
    message: 'Registration success!'
  })
}

module.exports = auth
