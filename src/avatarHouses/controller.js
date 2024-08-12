const houseService = require('./service');

const createHouse = async (req, res) => {
    try {
        const house = req.body;
        const newHouse = await houseService.createHouse(house);
        res.status(201).json(newHouse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getAllHouses = async (req, res) => {
    try {
        const houses = await houseService.getAllHouses();
        res.status(200).json(houses);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getHouseById = async (req, res) => {
    try {
        const id = req.params.id;
        const house = await houseService.getHouseById(id);
        res.status(200).json(house);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const updateHouse = async (req, res) => {
    try {
        const id = req.params.id;
        const houseData = req.body;
        await houseService.updateHouse(id, houseData);
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteHouse = async (req, res) => {
    try {
        const id = req.params.id;
        await houseService.deleteHouse(id);
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    createHouse,
    getAllHouses,
    getHouseById,
    updateHouse,
    deleteHouse,
}
