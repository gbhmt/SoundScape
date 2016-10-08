import { LOGIN,
        LOGOUT,
        SIGNUP,
        receiveCurrentUser } from '../actions/session_actions.js';
import { receiveErrors, clearErrors } from '../actions/error_actions.js';
import { signup, login, logout } from '../util/session_api_util.js';

const sessionMiddleware = (store) => (next) => (action) => {
  const success = (data) => {
    store.dispatch(receiveCurrentUser(data));
  };
  const error = (data) => store.dispatch(receiveErrors(data.responseJSON));

  switch (action.type) {
    case LOGIN: {
      return login(action.user, success, error);
    }
    case LOGOUT: {
      logout(success, error);
      return next(action);
    }
    case SIGNUP: {
      return signup(action.user, success, error);
    }
    default:
      return next(action);
  }
};

export default sessionMiddleware;
