import {applyMiddleware, compose, createStore} from 'redux'
import rootReducer from './rootReducer'
import reduxThunk from 'redux-thunk'

// it is simply a middleware to output changes of
const loggerMiddleware = store => next => action => {
  console.log(store.getState())
  return next(action)
}

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(
  loggerMiddleware,
  reduxThunk
  //   reduxThunk we need to async requests,

)))

export default store