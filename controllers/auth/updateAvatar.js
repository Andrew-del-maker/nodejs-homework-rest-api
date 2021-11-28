const fs = require('fs/promises')
const path = require('path')
// var Jimp = require('jimp')

const { User } = require('../../model')
const { NotFound } = require('http-errors')

const contactsDir = path.join(__dirname, '../../public/users')
const updateUserAvatar = async(req, res) => {
  const { _id } = req.user
  const { path: tempUpload, originalname } = req.file
  console.log(req.file)
  try {
    const resultUpload = path.join(contactsDir, `${_id}`, `${_id}_${originalname}`)
    // const jimpImage = Jimp.read(resultUpload, (err, img) => {
    //   if (err) throw err
    //   img
    //     .resize(250, 250)
    // })
    await fs.rename(tempUpload, resultUpload)
    const avatar = path.join('/users', `${_id}`, `${_id}_${originalname}`)
    const result = await User.findByIdAndUpdate(_id, { avatar }, { new: true })
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

module.exports = updateUserAvatar
