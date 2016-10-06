import sessionReducer from './session_reducer.js';
import errorReducer from './error_reducer.js';
import userReducer from './user_reducer.js';
import trackReducer from './track_reducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  currentUser: sessionReducer,
  errors: errorReducer,
  users: userReducer,
  tracks: trackReducer
});

export default rootReducer;
