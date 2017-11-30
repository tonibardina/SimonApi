const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('./passport')

const app = express()
const routes = require('./routes')

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(passport.initialize())
app.use(routes)

module.exports = app
