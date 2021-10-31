const router = require('express').Router();
const todoController = require('../controllers/TodoController');

router.post('/', todoController.addNewTask);

router.get('/', todoController.getAllTasks);

router.delete('/:id/', todoController.deleteTaskById);

router.put('/:id/', todoController.updateTask);

module.exports = router;
