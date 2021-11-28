const express = require('express')
const { validation, controllerWrapper, authenticate, upload } = require('../../middlewares')
const { auth, login, singout, updateUserAvatar, updateAvatar, verify, verifyAgain } = require('../../controllers')
const { joiSchema } = require('../../model/user')
const router = express.Router()

router.post('/singup', validation(joiSchema), controllerWrapper(auth))
router.post('/singin', validation(joiSchema), controllerWrapper(login))
router.get('/singout', authenticate, controllerWrapper(singout))
router.patch('/users/avatar', authenticate, upload.single('avatar'), controllerWrapper(updateUserAvatar))
router.patch('/:contactId/avatar', upload.single('avatar'), authenticate, controllerWrapper(updateAvatar))
router.get('/verify/:verificationToken', controllerWrapper(verify))
router.post('/users/verify', controllerWrapper(verifyAgain))

module.exports = router
