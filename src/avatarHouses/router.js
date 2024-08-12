const houseController = require('./controller');
const express = require('express')

const router = express.Router()

router.get('/', houseController.getAllHouses)
router.get('/:id', houseController.getHouseById)
router.post('/', houseController.createHouse)
router.put('/:id', houseController.updateHouse)
router.delete('/:id', houseController.deleteHouse)

module.exports = router;