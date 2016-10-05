import * as userActions from '../actions/user_actions.js';
import { receiveErrors, clearErrors } from '../actions/error_actions.js';
import { fetchAllUsers, fetchSingleUser, updateUser } from '../util/users_api_util.js';


const userMiddleware = ({ getState, dispatch }) => (next) => (action) => {
  const error = (data) => dispatch(receiveErrors(data.responseJSON));
  switch (action.type) {
    case userActions.FETCH_ALL_USERS: {
      const success = (data) => dispatch(userActions.receiveAllUsers(data));
      fetchAllUsers(success, error);
      return next(action);
    }
    case userActions.FETCH_SINGLE_USER: {
      const success = (data) => dispatch(userActions.receiveSingleUser(data));
      fetchSingleUser(action.id, success, error);
      return next(action);
    }
    case userActions.UPDATE_USER: {
      const success = (data) => dispatch(userActions.receiveSingleUser(data));
      updateUser(action.user, success, error);
      return next(action);
    }
    default:
      return next(action);
  }
};

export default userMiddleware;
