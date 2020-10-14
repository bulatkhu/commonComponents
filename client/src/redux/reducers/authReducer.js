import * as actions from '../actions/actionTypes'

const initialState = {
  isAuth: false,
  onLoginError: false,
  onRegisterError: false
}

export default function isAuth(state = initialState, action) {

  switch (action.type) {
    case actions.IS_AUTH:
      return { ...state, isAuth: action.payload }
    case actions.LOGIN_ERROR:
      return { ...state, onLoginError: action.payload }
    case actions.REGISTER_ERROR:
      return { ...state, onRegisterError: action.payload }
    default:
      return state
  }

}