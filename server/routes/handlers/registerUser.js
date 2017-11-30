const User = require('../../models/model')

function registerUser (req, res) {
  const { username, password } = req.body
  const account = new User({ username })
  User.register(account, password, (err, user) => {
    if (err) {
      return res.status(500).json({success: false, msg: 'Username already exists.'})
    }
    res.status(200).json({
      success: true,
      msg: 'Successful created new user.',
      user
    })
  })
}

module.exports = registerUser
