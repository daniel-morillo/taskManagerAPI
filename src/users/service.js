const User = require('../models/user')

const createUser = async (userData) => {
    const user = new User(userData)
    return await user.save()
};

const getAllUsers = async () => {
    return await User.find()
}

const getUserById = async (id) => {
    return await User.findById(id)
}

const updateUser = async (userId, userData) => {
    return await User.updateOne({ _id: userId }, { $set: userData });
};

const deleteUser = async (userId) => {
    return await User.deleteOne({ _id: userId });
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}