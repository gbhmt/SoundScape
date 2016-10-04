import { RECEIVE_CURRENT_USER,
        LOGOUT } from '../actions/session_actions.js';

const sessionReducer = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER: {
      return action.currentUser;
    }
    case LOGOUT: {
      return null;
    }
    default:
     return state;
  }
};

export default sessionReducer;
