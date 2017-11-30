const User = require('../../models/model')

function findUsers (req, res) {
  User
    .find('username')
    .then(user => res.json(user))
}

module.exports = findUsers
