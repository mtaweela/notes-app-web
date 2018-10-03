var express = require("express");
var router = express.Router();

var todosController = require('../controllers/todos.controller');
let {authenticate} = require('./../middleware/authenticate.middleware');

router
  .get("/", authenticate, todosController.getAllTodos)
  .post("/", authenticate, todosController.addTodo)
  .get("/:id", authenticate, todosController.getOneTodo)
  .put("/:id", authenticate, todosController.updateOneTodo)
  .delete("/:id", authenticate, todosController.deleteOneTodo);

module.exports = router;
