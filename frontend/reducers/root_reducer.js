import sessionReducer from './session_reducer.js';
import errorReducer from './error_reducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  currentUser: sessionReducer,
  errors: errorReducer
});

export default rootReducer;
