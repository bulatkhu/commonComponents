require('dotenv').config()
const express = require('express')
const router = express.Router()
const controller = require('../controllers/auth')
const passport = require('passport')

//  localhost:5000/api/auth/login
router.post('/login', controller.login)

//  localhost:5000/api/auth/register
router.post('/register', controller.register)


router.post('/verify', controller.verify)


router.get('/profile',
  passport.authenticate('jwt', {session: false}),
  controller.getNotes
)



module.exports = router