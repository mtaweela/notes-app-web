var _ = require("lodash");

var { User } = require("./../models/user");

var addUser = (req, res ) => {
    var body = _.pick(req.body, ["email", "password"]);
    var user = new User(body);

    user
        .save()
        .then(() => {
            return user.generateAuthToken();
        })
        .then(token => {
            res.header('x-auth', token).send(user);
        })
        .catch(err => {
            res.status(400).send(err);
        });
};

let getMe = (req, res) => {
    res.send(req.user);
}

module.exports = {
    addUser,
    getMe
};