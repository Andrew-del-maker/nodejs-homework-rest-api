const gravatar = require('gravatar')
const fs = require('fs/promises')
const path = require('path')
const { Conflict } = require('http-errors')
const { nanoid } = require('nanoid')

const { User } = require('../../model')
const { sendMail } = require('../../helpers')

const userDir = path.join(__dirname, '../../public/users')

const auth = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict(`User with email ${email} already exist`)
  }
  const verificationToken = nanoid()
  const avatar = gravatar.url(`${email}`)
  const newUser = new User({ email, avatar, verificationToken })
  newUser.setPassword(password)
  await newUser.save()
  const mail = {
    to: email,
    subject: 'verification registration',
    html: `<a href='http://localhost:8001/api/auth/verify/${verificationToken}'>Click to verify email</a>`
  }
  await sendMail(mail)
  const userFolder = path.join(userDir, String(newUser._id))
  await fs.mkdir(userFolder)
  res.status(201).json({
    status: 'success',
    code: 201,
    message: 'Registration success!'
  })
}

module.exports = auth
