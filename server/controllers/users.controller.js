var _ = require("lodash");

var { User } = require("./../models/user");

var addUser = (req, res ) => {
    var body = _.pick(req.body, ["email", "password"]);
    var user = new User(body);

    user
        .save()
        .then(user => {
        res.send(user);
        })
        .catch(err => {
        res.status(400).send(err);
        });
};

module.exports = {
    addUser: addUser,
};