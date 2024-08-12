const customizableService = require('./service')

const createCustomizable = async (req, res) => {
    try {
        const customizable = req.body;
        const newCustomizable = await customizableService.createCustomizable(customizable);
        res.status(201).json(newCustomizable);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getAllCustomizables = async (req, res) => {
    try {
        const customizables = await customizableService.getAllCustomizables();
        res.status(200).json(customizables);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getCustomizableById = async (req, res) => {
    try {
        const id = req.params.id;
        const customizable = await customizableService.getCustomizableById(id);
        res.status(200).json(customizable);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const updateCustomizable = async (req, res) => {
    try {
        const id = req.params.id;
        const customizableData = req.body;
        await customizableService.updateCustomizable(id, customizableData);
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteCustomizable = async (req, res) => {
    try {
        const id = req.params.id;
        await customizableService.deleteCustomizable(id);
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    createCustomizable,
    getAllCustomizables,
    getCustomizableById,
    updateCustomizable,
    deleteCustomizable,
}