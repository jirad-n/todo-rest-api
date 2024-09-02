const express = require('express');
const fs = require('fs/promises');

const todoController = require('../controllers/todo-controller');
const todoRouter = express.Router();

//GET /todos
todoRouter.get('/', todoController.getAllTodo);
//POST /todos
todoRouter.post('/', todoController.createTodo);
//PATCH /todos/:todoId
todoRouter.patch('/:todoId', todoController.updateTodo);
//DELETE /todos/:todoId
todoRouter.delete('/:todoId', todoController.deleteTodo);

module.exports =  todoRouter;
