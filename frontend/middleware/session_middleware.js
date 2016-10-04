import { LOGIN,
        LOGOUT,
        SIGNUP,
        receiveErrors,
        receiveCurrentUser } from '../actions/session_actions.js';
import { signup, login, logout } from '../util/session_api_util.js';

const sessionMiddleware = (store) => (next) => (action) => {
  const success = (data) => store.dispatch(receiveCurrentUser(data));
  const error = (data) => store.dispatch(receiveErrors(data.responseJSON));

  switch (action.type) {
    case LOGIN: {
      login(action.user, success, error);
      return next(action);
    }
    case LOGOUT: {
      return next(action);
    }
    case SIGNUP: {
      signup(action.user, success, error);
      return next(action);
    }
    default:
      return next(action);
  }
};

export default sessionMiddleware;
