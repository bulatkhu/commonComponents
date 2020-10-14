import { combineReducers } from 'redux'
import counter1 from './reducers/counter1'
import isAuth from './reducers/authReducer'
import users from './reducers/users'

export default combineReducers({
  counter1, users, isAuth
})