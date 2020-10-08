import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import Width from './Redux/width'

const rootReducer = combineReducers({
  Width
})

export const initializeStore = (initialState) => {
  return createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk)))
}