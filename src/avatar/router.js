const avatarController = require('./controller');
const express = require('express');

const router = express.Router();

router.get('/', avatarController.getAllAvatars);
router.get('/:id', avatarController.getAvatarById);
router.post('/', avatarController.createAvatar);
router.put('/:id', avatarController.updateAvatar);
router.delete('/:id', avatarController.deleteAvatar);

module.exports = router;