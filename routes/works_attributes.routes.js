const Router = require('express')
const Works_attributesController = require('../controller/works_attributes.controller')
const router = new Router()

router.post('/',Works_attributesController.create)
router.get('/', Works_attributesController.getAll)
router.get('/:id', Works_attributesController.getOne)
router.delete('/:id', Works_attributesController.delete)
router.post('/update/:id', Works_attributesController.update)

module.exports = router
