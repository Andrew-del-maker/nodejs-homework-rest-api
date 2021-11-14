const express = require('express')
const router = express.Router()

const { validation, controllerWrapper } = require('../../middlewares')
const { joiSchema } = require('../../model/contact')
const ctrl = require('../../controllers')

router.get('/', controllerWrapper(ctrl.getAll))
router.get('/:contactId', controllerWrapper(ctrl.getById))
router.post('/', validation(joiSchema), controllerWrapper(ctrl.addContact))
router.put('/:contactId', validation(joiSchema), controllerWrapper(ctrl.updateById))
router.patch('/:contactId/favorite', controllerWrapper(ctrl.updateFavor))
router.delete('/:contactId', controllerWrapper(ctrl.removeById))

module.exports = router
