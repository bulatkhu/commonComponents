const express = require('express')
const router = require('./routes/auth')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const passport = require('passport')

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
app.use(passport.initialize())
require('./middleware/passport-verify')(passport)


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

app.use('/api/auth', router)


module.exports = app
