var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('./db/mongoose');
var {Todo} = require('./models/todos');
var {User} = require('./models/user');

const port = process.env.PORT || 3000;

var app = express();

app
.use(bodyParser.json())
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