import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // A thunk is a function that wraps an expression to delay its evaluation.
 
import rootReducer from '../reducers/index';
 
// Connect the store to the reducers.
export default createStore(
  rootReducer,
  applyMiddleware(thunk)
);