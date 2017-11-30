const User = require('../../models/model')

function updateLevel (req, res) {
  const {username, level} = req.body
  User
    .updateOne({username}, {$set: {level}})
    .then(user => res.json(user))
}

module.exports = updateLevel
