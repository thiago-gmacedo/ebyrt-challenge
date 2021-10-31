const { ObjectId } = require('mongodb');
const connection = require('./connection');

const COLLECTION_NAME = 'taskList';

const addNewTask = async (task) => {
  return;
};

const getAllTasks = async () => {
  return;
};

const deleteTaskById = async (_id) => {
  return;
};

const updateTask = async (_id, name, status) => {
  return;
};

module.exports = {
  addNewTask,
  getAllTasks,
  deleteTaskById,
  updateTask,
};
