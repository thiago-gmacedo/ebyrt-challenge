const todoService = require('../services/TodoService');

const addNewTask = async (req, res) => {
  const { name, status } = req.body;
  
  const momentDate = new Date();

  const response = await todoService.addNewTask({ name, status, momentDate });
  res.status(201).json(response);
};

const getAllTasks = async (req, res) => {
  const response = await todoService.getAllTasks();
  res.status(200).json(response);
};

const deleteTaskById = async (req, res) => {
  const { id } = req.params;
  const response = await todoService.deleteTaskById(id);
  res.status(200).json(response);
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { name, status } = req.body;
  const response = await todoService.updateTask(id, name, status);
  return res.status(200).json(response);
};

module.exports = {
  addNewTask,
  getAllTasks,
  deleteTaskById,
  updateTask,
};
