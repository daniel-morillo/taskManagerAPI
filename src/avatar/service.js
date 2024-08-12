const Avatar = require('../models/avatar');

const createAvatar = async (avatar) => {
    const newAvatar = new Avatar(avatar);
    return await newAvatar.save();
}

const getAllAvatars = async () => {
    return await Avatar.find();
}

const getAvatarById = async (id) => {
    return await Avatar.findById(id);
}


const updateAvatar = async (avatarId, avatarData) => {
    return await Avatar.updateOne({ _id: avatarId }, { $set: avatarData });
}

const deleteAvatar = async (avatarId) => {
    return await Avatar.deleteOne({ _id: avatarId });
}

module.exports = {
    createAvatar,
    getAllAvatars,
    getAvatarById,
    updateAvatar,
    deleteAvatar,
}

