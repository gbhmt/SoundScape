import { RECEIVE_CURRENT_USER,
        RECEIVE_ERRORS,
        LOGOUT } from '../actions/session_actions.js';
import merge from 'lodash/merge';

const sessionReducer = (state = { currentUser: null, errors: [] }, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER: {
      return merge({}, {currentUser: action.currentUser, errors: []});
    }
    case RECEIVE_ERRORS: {
      return merge({}, {currentUser: null, errors: action.errors});
    }
    case LOGOUT: {
      return merge({}, {currentUser: null, errors: []});
    }
    default:
     return state;
  }
};

export default sessionReducer;
