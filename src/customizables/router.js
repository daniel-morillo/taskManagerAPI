const customizablesRouter = require('./controller')
const express = require('express')

const router = express.Router()

router.get('/', customizablesRouter.getAllCustomizables)
router.get('/:id', customizablesRouter.getCustomizableById)
router.post('/', customizablesRouter.createCustomizable)
router.put('/:id', customizablesRouter.updateCustomizable)
router.delete('/:id', customizablesRouter.deleteCustomizable)

module.exports = router;