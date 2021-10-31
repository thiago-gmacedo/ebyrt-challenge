const { ObjectId } = require('mongodb');
const connection = require('./connection');

const COLLECTION_NAME = 'taskList';

const addNewTask = async (task) => {
  const db = await connection();
  const response = await db.collection(COLLECTION_NAME).insertOne(task);
  return { _id: response.InsertedId, ...task };
};

const getAllTasks = async () => {
  const db = await connection();
  const response = await db.collection(COLLECTION_NAME).find({}).toArray();
  return response;
};

const deleteTaskById = async (_id) => {
  const db = await connection();
  const response = await db.collection(COLLECTION_NAME).deleteOne({ _id: ObjectId(_id) });
  return response;
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
