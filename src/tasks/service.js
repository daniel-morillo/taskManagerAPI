const Task = require('../models/task');

const createTask = async (taskData) => {
    const task = new Task(taskData)
    return await task.save()
}

const getAllTasks = async () => {
    return await Task.find()
}

const getTaskById = async (id) => {
    return await Task.findById
}

const updateTask = async (taskId, taskData) => {
    return await Task.updateOne({ _id: taskId }, { $set: taskData });
}

const deleteTask = async (taskId) => {
    return await Task.deleteOne({ _id: taskId });
}

const completeTask = async (taskId) => {
    return await Task.update({ _id: taskId }, { $set: { completed: true } });
}

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask,
    completeTask
}
