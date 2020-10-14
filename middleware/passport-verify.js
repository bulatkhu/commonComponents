const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../models/User')


const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.ACCESS_TOKEN_SECRET
}

module.exports = passport => {

  passport.use(new JwtStrategy(options, async (payload, done) => {

    try {
      const user = await User.findById(payload.id).select('email id notes')

      if (user) {
        done(null, user)
      } else {
        done(null, false)
      }

    } catch (e) {
      console.log(e)
    }


  }))

}