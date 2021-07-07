import * as actions from '../actions/actionTypes'

const initialState = {
  counter: 10,
  btnAddNumber: null,
  btnSubNumber: null,
}

export default function counter(state = initialState, action) {

  switch (action.type) {
    case actions.ADD_COUNTER:
      return { ...state, counter: state.counter + 1 }
    case actions.SUB_COUNTER:
      return { ...state, counter: state.counter - 1 }
    case actions.SET_COUNTER:
      return { ...state, counter: action.counter }
    case actions.ADD_NUMBER:
      return { ...state, counter: state.counter + action.counter }
    case actions.SUB_NUMBER:
      return { ...state, counter: state.counter - action.counter }
    case actions.SUB_INPUT:
      return { ...state, btnSubNumber: action.btnSubNumber }
    case actions.ADD_INPUT:
      return { ...state, btnAddNumber: action.btnAddNumber }
    default:
      return state
  }
}