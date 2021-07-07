import * as actions from '../actions/actionTypes'

const initialState = []

export default function userReducer(state = initialState, action) {

  switch (action.type) {
    case actions.FETCH_USERS:
      return action.users
    case actions.DELETE_USER:
      return [...state, 'Hello']
    default:
      return state
  }

}