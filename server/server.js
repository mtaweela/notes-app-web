var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('./db/mongoose');
var {Todo} = require('./models/todos');
var {User} = require('./models/user');

const port = process.env.PORT || 3000;

var app = express();

app
.use(bodyParser.json())
.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (err) => {
        res.status(400).send(err);
    })
})
.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
})
.listen(port, () => {
    console.log(`started on port ${port}`)
});

module.exports = {app};