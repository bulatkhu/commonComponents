import React from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import './Auth.scss'
import {connect} from 'react-redux'
import {fetchAuthInfo, isAuthenticated, setLoginError} from '../../redux/actions/actions'
import store from '../../redux/store'


const token = localStorage.getItem('accessToken')

if (token) {
  store.dispatch(fetchAuthInfo(token))
}


const Auth = (props) => {


  const onSubmitLoginForm = event => {
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value


    axios.post('/api/auth/login', {email, password})
      .then(res => {

        if (!res) {
          props.setError('Check out your internet connect')
        }

        if (res.status === 200) {

          localStorage.setItem('accessToken', res.data.jwt)
          props.loginHandler(!!res.data.isAuth)
          props.setError(false)
          // console.log('Success:', res.data.jwt)
          // props.history.push('/api/logged')


        } else {
          props.setError('Something went wrong')
          props.loginHandler(false)

        }
      })
      .catch(error => {
        props.setError(error.response.data.error)
      })


  }


  return (
    <div className="auth__wrapper">

      <h1 className="auth__title">Login</h1>

      {
        props.onError
          ? <p style={{color: 'red'}}>{props.onError}</p>
          : null
      }

      <form onSubmit={onSubmitLoginForm} action="http://localhost:5555/api/auth/login" className="auth">

        <input className="auth-input auth-input__username" type="text" id="email" name="email" placeholder="login"/>
        <input className="auth-input auth-input__password" type="password" id="password" name="password"
               placeholder="password"/>

        <button type="submit">Sign in</button>
      </form>

    </div>
  )
}

function mapStateToProps(state) {

  return {
    isAuth: state.isAuth.isAuth,
    onError: state.isAuth.onLoginError,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loginHandler: value => dispatch(isAuthenticated(value)),
    setError: error => dispatch(setLoginError(error)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Auth))