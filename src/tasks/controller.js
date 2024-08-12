const taskService = require('./service')

const createTask = async (req, res ) => {
    try {
        const task = await taskService.createTask(req.body);
        res.json(task);
    } catch (error) {
        res.json({ message: error.message});
    }
}

const getAllTasks = async (req, res) => {
    try {
        const tasks = await taskService.getAllTasks();
        res.json(tasks);
    } catch (error) {
        res.json({ message: error.message});
    }
}

const getTaskById = async (req, res) => {
    try {
        const task = await taskService.getTaskById(req.params.id);
        res.json(task);
    } catch (error) {
        res.json({ message: error.message});
    }
}

const updateTask = async (req, res) => {
    try {
        const task = await taskService.updateTask(req.params.id, req.body);
        res.json(task);
    } catch (error) {
        res.json({ message: error.message});
    }
}

const deleteTask = async (req, res) => {
    try {
        const task = await taskService.deleteTask(req.params.id);
        res.json(task);
    } catch (error) {
        res.json({ message: error.message});
    }
}

const completeTask = async (req, res) => {
    try {
        const task = await taskService.completeTask(req.params.id);
        res.json(task);
    } catch (error) {
        res.json({ message: error.message});
    }
}

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask,
    completeTask,
}