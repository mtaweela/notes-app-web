var express = require("express");
var server = express.Router();

var usersRoute = require('./users.route');
var todosRoute = require('./todos.route');

server
  .use('/users', usersRoute)
  .use('/todos', todosRoute)
module.exports = server;