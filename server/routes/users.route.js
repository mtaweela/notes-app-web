var express = require("express");
var router = express.Router();

var usersController = require('../controllers/users.controller');
let {authenticate} = require('./../middleware/authenticate.middleware');

router
    .get("/me", authenticate, usersController.getMe)
    .post("/", usersController.addUser)
    .post("/login", usersController.login)

module.exports = router;
