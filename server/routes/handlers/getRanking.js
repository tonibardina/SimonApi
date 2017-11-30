const User = require('../../models/model')

function getRanking (req, res) {
  User
    .find({}).sort({ points: -1 })
    .then(players => { res.json(players) })
}

module.exports = getRanking
