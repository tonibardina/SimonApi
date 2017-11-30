const fs = require('fs')
const thereIsDotEnv = fs.existsSync('.env')
if (thereIsDotEnv) require('dotenv').load()

const app = require('./server/app')
const db = require('./server/db')

const dbURI = process.env.DB_URI
const PORT = process.env.PORT || 3000

db.openUri(dbURI)
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))
