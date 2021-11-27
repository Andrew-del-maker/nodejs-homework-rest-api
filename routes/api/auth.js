const express = require('express')
const { validation, controllerWrapper, authenticate } = require('../../middlewares')
const { auth, login, singout } = require('../../controllers')
const { joiSchema } = require('../../model/user')
const router = express.Router()

router.post('/singup', validation(joiSchema), controllerWrapper(auth))
router.post('/singin', validation(joiSchema), controllerWrapper(login))
router.get('/singout', authenticate, controllerWrapper(singout))

module.exports = router
