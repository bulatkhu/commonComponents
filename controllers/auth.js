const jwt = require('jsonwebtoken')
const userModel = require('../models/User')



module.exports.login = async function (req, res) {
  const {email, password} = req.body


  if (!email.trim() || !password.trim()) {
    return res.status(401).json({
      error: 'Email or password can not be empty',
      isAuth: false
    })
  }

  const user = await userModel.findOne({ email })
  if (!user) {
    return res.status(401).json({
      error: 'Email is not found', isAuth: false
    })
  } else if (user.password !== password) {
    return res.status(401).json({
      error: 'Password is wrong', isAuth: false
    })
  }

  const payload = {email, id: user._id}


  let accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    algorithm: "HS256",
    expiresIn: process.env.ACCESS_TOKEN_LIFE
  })


  let refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    algorithm: "HS256",
    expiresIn: process.env.REFRESH_TOKEN_LIFE
  })

  user.refreshToken = refreshToken
  await user.save()

  // emails[email].refreshToken = refreshToken



  res.cookie("jwt", accessToken, {secure: true, httpOnly: true})

  res.status(200).json({
    jwt: `Bearer ${accessToken}`,
    isAuth: true
  })
}


module.exports.register = async function (req, res) {
  const {email, password, name} = req.body
  console.log(name)

  if (!password.trim() && !email.trim() && !name.trim()) {
    return res.status(401).json({
      error: 'Password or Email or Name is invalid'
    })
  }

  const user = await userModel.findOne({ email })
  if (user) {
    return res.status(401).json({
      error: `User with email ${email} is already registered`
    })
  }

  const users = new userModel({email, password, name})
  await users.save()
  return res.status(200).json({
    info: `User with email: ${email} was existed`
  })
}


module.exports.verify = function (req, res, next) {

  const {accessToken} = req.body
  // console.log('cookie:', req.cookie, req.signedCookies)


  if (!accessToken) {
    console.log('invalid accessToken')
    return res.status(403).json({
      error: 'invalid accessToken', isAuth: false
    })
  }

  let payload

  const token = accessToken.substring(7)

  try {
    payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    return res.status(200).json({
      ...payload, isAuth: true
    })
    // next()

  } catch (e) {
    console.log('accessToken has been expired')
    return res.status(401).json({
      error: 'accessToken has been expired', isAuth: false
    })
  }
}


module.exports.verifyMiddleware = function (req, res, next) {
  const {accessToken} = req.body


  console.log('cookie:', req.cookie)

  if (!accessToken) {
    console.log('invalid accessToken')
    return res.status(403).json({
      error: 'invalid accessToken', isAuth: false
    })
  }

  // let payload

  try {
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    next()

  } catch (e) {
    console.log('accessToken has been expired')
    return res.status(401).json({
      error: 'accessToken has been expired', isAuth: false
    })
  }
}


module.exports.getNotes = async function (req, res) {
  const token = req.headers.authorization.substring(7)
  const decodedToken = jwt.decode(token)
  const user = await userModel.findById(decodedToken.id).select('email name')

  res.status(200).json({
    ...JSON.parse(JSON.stringify(user))
  })

}