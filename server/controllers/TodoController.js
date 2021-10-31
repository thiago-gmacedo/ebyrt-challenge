const todoService = require('../services/TodoService');

const addNewTask = async (req, res) => {
  const response = await todoService.addNewTask();
  res.status(201).json(response)
};

const getAllTasks = async (req, res) => {
  const response = await todoService.getAllTasks();
  res.status(200).json(response)
};

const deleteTaskById = async (req, res) => {
  const response = await todoService.deleteTaskById();
  res.status(200).json(response)
};

const updateTask = async (req, res) => {
  const response = await todoService.updateTask();
  res.status(200).json(response)
};

module.exports = {
  addNewTask,
  getAllTasks,
  deleteTaskById,
  updateTask,
};
