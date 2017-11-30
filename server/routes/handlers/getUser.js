const User = require('../../models/model')

function getUser (req, res) {
  const {username} = req.body
  User
    .find({username})
    .then(user => res.json(user))
}

module.exports = getUser
