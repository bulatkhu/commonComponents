import { combineReducers } from 'redux'
import counter1 from './reducers/counter1'
// import counter2 from './reducers/counter2'
import users from './reducers/users'

export default combineReducers({
  counter1, users
})