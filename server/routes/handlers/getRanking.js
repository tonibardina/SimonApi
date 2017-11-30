const User = require('../../models/model')

function getRanking (req, res) {
  User
    .find({}, (err, docs) => {
      if (err) throw err
      function compare (a, b) {
        if (a.points < b.points) {
          return 1
        }
        if (a.points > b.points) {
          return -1
        }
        return 0
      }
      docs.sort(compare)
      res.json(docs)
    })
}

module.exports = getRanking
