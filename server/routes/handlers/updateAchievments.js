const User = require('../../models/model')

function updateAchievments (req, res) {
  const {username, achievments} = req.body
  User
    .updateOne({username}, {$set: {achievments}})
    .then(user => res.json(user))
}

module.exports = updateAchievments
