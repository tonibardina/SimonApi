const User = require('../../models/model')

function getPosition (req, res) {
  const {username} = req.body
  User
    .find('username', function (err, docs) {
      if (err) throw err
      let counter = 1
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
      docs.forEach(user => {
        user.username === username ? res.json(counter) : counter++
      })
    })
    .catch(error => { res.send(error) })
}

module.exports = getPosition
