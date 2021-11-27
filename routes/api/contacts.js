const express = require('express')
const router = express.Router()

const { validation, controllerWrapper, authenticate } = require('../../middlewares')
const { joiSchema } = require('../../model/contact')
const ctrl = require('../../controllers')

router.get('/', authenticate, controllerWrapper(ctrl.getAll))
router.get('/:contactId', authenticate, controllerWrapper(ctrl.getById))
router.post('/', authenticate, validation(joiSchema), controllerWrapper(ctrl.addContact))
router.put('/:contactId', authenticate, validation(joiSchema), controllerWrapper(ctrl.updateById))
router.patch('/:contactId/favorite', authenticate, controllerWrapper(ctrl.updateFavor))
router.delete('/:contactId', authenticate, controllerWrapper(ctrl.removeById))

module.exports = router
