var express = require("express");
var router = express.Router();

var usersController = require('../controllers/users.controller')

router
    .post("/", usersController.addUser);

module.exports = router;
