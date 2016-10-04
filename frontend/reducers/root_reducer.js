import sessionReducer from './session_reducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({session: sessionReducer});

export default rootReducer;
