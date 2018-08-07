var express = require("express");
var router = express.Router();

var todosController = require('../controllers/todos.controller');

router
  .get("/", todosController.getAllTodos)
  .post("/", todosController.addTodo)
  .get("/:id", todosController.getOneTodo)
  .put("/:id", todosController.updateOneTodo)
  .delete("/:id", todosController.deleteOneTodo);

module.exports = router;
