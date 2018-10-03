var _ = require("lodash");

var { User } = require("./../models/user");

var addUser = (req, res) => {
  var body = _.pick(req.body, ["email", "password"]);
  var user = new User(body);

  user
    .save()
    .then(() => {
      return user.generateAuthToken();
    })
    .then(token => {
      res.header("x-auth", token).send(user);
    })
    .catch(err => {
      res.status(400).send(err);
    });
};

let getMe = (req, res) => {
  res.send(req.user);
};

let login = (req, res) => {
  let body = _.pick(req.body, ["email", "password"]);

  User.findByCredintials(body.email, body.password)
    .then(user => {
      return user.generateAuthToken().then(token => {
        res.header("x-auth", token).send(user);
      });
    })
    .catch(err => {
      res.status(400).send();
    });
};

let logout = (req, res) => {
  req.user
    .removeToken(req.token)
    .then(() => {
      res.status(200).send();
    })
    .catch(err => {
      res.staus(400).send();
    });
};

module.exports = {
  addUser,
  getMe,
  login,
  logout
};
