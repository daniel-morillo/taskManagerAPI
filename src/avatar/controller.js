const avatarService = require('./service')

const createAvatar = async (req, res) => {
    try {
        const avatar = req.body;
        const newAvatar = await avatarService.createAvatar(avatar);
        res.status(201).json(newAvatar);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getAllAvatars = async (req, res) => {
    try {
        const avatars = await avatarService.getAllAvatars();
        res.status(200).json(avatars);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getAvatarById = async (req, res) => {
    try {
        const id = req.params.id;
        const avatar = await avatarService.getAvatarById(id);
        res.status(200).json(avatar);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const updateAvatar = async (req, res) => {
    try {
        const id = req.params.id;
        const avatarData = req.body;
        await avatarService.updateAvatar(id, avatarData);
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteAvatar = async (req, res) => {
    try {
        const id = req.params.id;
        await avatarService.deleteAvatar(id);
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    createAvatar,
    getAllAvatars,
    getAvatarById,
    updateAvatar,
    deleteAvatar,
}