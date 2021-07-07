const redux = require('redux')

// Actions
const addCounter = {
  type: 'ADD'
}

const subCounter = {
  type: 'SUB'
}

const addNumber = {
  type: 'ADD_NUMBER'
}

const initialState = {
  counter: 0
}

// Reducer
const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD':
      return { ...state, counter: state.counter + 1}
    case 'SUB':
      return { ...state, counter: state.counter - 1}
    case 'ADD_NUMBER':
      return { ...state, counter: state.counter + action.counter }
    default:
      return state
  }
}


// Store
const store = redux.createStore(reducer)
// console.log('1', store.getState())

store.subscribe(() => {
  console.log('something', store.getState())
})




store.dispatch(addCounter)
store.dispatch(subCounter)
store.dispatch({ type: 'ADD_NUMBER', counter: 5 })