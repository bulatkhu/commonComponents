import * as actions from './actionTypes'
import axios from 'axios'


export function addNumber(num) {
  return {
    type: actions.ADD_NUMBER,
    counter: +num
  }
}

export function subNumber(num) {
  return {
    type: actions.SUB_NUMBER,
    counter: +num
  }
}

export function addCounter() {
  return {
    type:  actions.ADD_COUNTER
  }
}

export function subCounter() {
  return {
    type: actions.SUB_COUNTER
  }
}

export function setCounter(num) {
  return {
    type: actions.SET_COUNTER,
    counter: num ? +num : 0
  }
}

export function onAddInput(num) {
  return {
    type: actions.ADD_INPUT,
    btnAddNumber: num
  }
}

export function onSubInput(num) {
  return {
    type: actions.SUB_INPUT,
    btnAddNumber: num
  }
}

export function asyncAddNumber(num) {
  return (dispatch) => {

    setTimeout(() => {

      dispatch(addNumber(num))

    },3000)

  }

}

export const fetchUsers = () => {
  return async dispatch => {
    try {
      const users = await fetch('https://jsonplaceholder.typicode.com/users/').then(res => res.json())

      dispatch({
        type: actions.FETCH_USERS,
        users
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export function isAuthenticated(value) {
  return {
    type: actions.IS_AUTH,
    payload: !!value
  }
}

export function fetchAuthInfo(jwt) {
  return dispatch => {

    axios.post('/api/auth/verify', {
      accessToken: jwt
    })
      .then(res => {
        if (res.status === 200) {
          dispatch(isAuthenticated(res.data.isAuth))
        } else {
          dispatch(isAuthenticated(res.data.isAuth))
        }
      })
      .catch(error => {

        if (!error.response) {
          dispatch(setLoginError('Check your internet connection'))
        } else {
          dispatch(setLoginError(error.response.data.error))
        }
      })

  }
}

export function setLoginError(error) {
  return {
    type: actions.LOGIN_ERROR,
    payload: error
  }
}

export function setRegisterError(error) {
  return {
    type: actions.REGISTER_ERROR,
    payload: error
  }
}