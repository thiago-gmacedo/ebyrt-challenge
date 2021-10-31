const todoModel = require('../models/TodoModel');

const addNewTask = async (task) => await todoModel.addNewTask(task);

const getAllTasks = async () => await todoModel.getAllTasks();

const deleteTaskById = async (_id) => await todoModel.deleteTaskById(_id);

const updateTask = async (_id, name, status) => await todoModel.updateTask(_id, name, status);

module.exports = {
  addNewTask,
  getAllTasks,
  deleteTaskById,
  updateTask,
};
