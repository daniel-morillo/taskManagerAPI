const Customizable = require('../models/customizable')

const createCustomizable = async (customizable) => {
    const newCustomizable = new Customizable(customizable)
    return await newCustomizable.save()
}

const getAllCustomizables = async () => {
    return await Customizable.find()
}

const getCustomizableById = async (id) => {
    return await Customizable.findById(id)
}

const updateCustomizable = async (customizableId, customizableData) => {
    return await Customizable.updateOne({ _id: customizableId }, { $set: customizableData })
}

const deleteCustomizable = async (customizableId) => {
    return await Customizable.deleteOne({ _id: customizableId })
}

module.exports = {
    createCustomizable,
    getAllCustomizables,
    getCustomizableById,
    updateCustomizable,
    deleteCustomizable,
}