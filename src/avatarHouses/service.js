const House = require('../models/avatarHouse')

const createHouse = async (house) => {
    const newHouse = new House(house)
    return await newHouse.save()
}

const getAllHouses = async () => {
    return await House.find()
}

const getHouseById = async (id) => {
    return await House.findById(id)
}

const updateHouse = async (houseId, houseData) => {
    return await House.updateOne({ _id: houseId }, { $set: houseData })
}

const deleteHouse = async(houseId) => {
    return await House.deleteOne({ _id: houseId })
}

module.exports = {
    createHouse,
    getAllHouses,
    getHouseById,
    updateHouse,
    deleteHouse,
}


