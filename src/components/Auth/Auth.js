import React from 'react'
import axios from 'axios'
import './Auth.scss'


const Auth = () => {

  const onSubmitLoginForm = event => {
    event.preventDefault()
    const username = event.target.username.value
    const password = event.target.password.value

    console.log(username, password)

    try {
      axios.post('https://api.ustaz.xyz/api/v1/user/login', {username, password})
        .then(res => console.log(res))
    } catch (e) {
      console.log(e)
    }


  }


  return (
    <div className="auth__wrapper">

      <h1 className="auth__title">Login</h1>

      <form onSubmit={onSubmitLoginForm} action="/auth" className="auth">

        <input defaultValue="koxa" className="auth-input auth-input__username" type="text" id="username" name="username" placeholder="login"/>
        <input defaultValue="koxanevich" className="auth-input auth-input__password" type="password" id="password" name="password" placeholder="password"/>

        <button type="submit">Sign in</button>
      </form>

    </div>
  )
}

export default Auth