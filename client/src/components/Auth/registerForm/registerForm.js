import React from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {setRegisterError} from '../../../redux/actions/actions'




const RegisterForm = props => {

  const onSubmitRegisterForm = ev => {
    ev.preventDefault()
    const email = ev.target.email.value
    const password = ev.target.password.value
    const name = ev.target.name.value

    axios.post('/api/auth/register', {
      email, password, name
    })
      .then(res => {
        if (res.status === 200) {
          console.log(res.data)
          props.history.push('/api/login')
        } else {
          props.onError(res.data.error)
        }
      })
      .catch(err => props.onError(err.response.data.error))

  }


  return (
    <div className="auth__wrapper">

      <h1 className="auth__title">Register</h1>

      {
        props.onRegisterError
          ? <p style={{color: 'red'}}>{props.onRegisterError}</p>
          : null
      }

      <form onSubmit={onSubmitRegisterForm} action="http://localhost:5555/api/auth/register" className="auth">

        <input className="auth-input auth-input__username" type="text" id="email" name="email" placeholder="Login"/>
        <input className="auth-input auth-input__password" type="password" id="password" name="password"
               placeholder="Password"/>
        <input className="auth-input auth-input__username" type="text" id="name" name="name"
               placeholder="Name"/>

        <button type="submit">Sign in</button>
      </form>

    </div>
  )
}


function mapStateToProps(state) {
  return {
    ...state.isAuth
    // onError: ...state.isAuth.onRegisterError,
    // onError: state.isAuth.onRegisterError
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onError: error => dispatch(setRegisterError(error))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RegisterForm))