const express = require('express')
const router = express.Router()

const passport = require('../passport')

const registerUser = require('./handlers/registerUser')
const handleLogin = require('./handlers/handleLoguin')
const findUsers = require('./handlers/users')
const getUser = require('./handlers/getUser')
const updateLevel = require('./handlers/updateLevel')
const updatePoints = require('./handlers/updatePoints')
const updateAchievments = require('./handlers/updateAchievments')
const getRanking = require('./handlers/getRanking')
const getPosition = require('./handlers/getPosition')

router.post('/register', registerUser)
router.post('/login', passport.authenticate('local', { session: false }), handleLogin)

router.post('/user', findUsers)
router.post('/getUser', getUser)

router.post('/updateLevel', updateLevel)
router.post('/updatePoints', updatePoints)
router.post('/updateAchievments', updateAchievments)
router.post('/getRanking', getRanking)
router.post('/getPosition', getPosition)

module.exports = router
