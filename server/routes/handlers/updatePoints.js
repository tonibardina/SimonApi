const User = require('../../models/model')

function updatePoints (req, res) {
  const {username, points} = req.body
  User
    .updateOne({username}, {$set: {points}})
    .then(user => res.json(user))
}

module.exports = updatePoints
