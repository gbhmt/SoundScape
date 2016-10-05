import * as userActions from '../actions/user_actions.js';
import { receiveErrors, clearErrors } from '../actions/error_actions.js';
import { fetchAllUsers, fetchSingleUser, updateUser } from '../util/users_api_util.js';


const userMiddleware = ({ getState, dispatch }) => (next) => (action) => {
  let error = (data) => dispatch(receiveErrors(data.responseJSON));
  switch (action.type) {
    case userActions.FETCH_ALL_USERS: {
      const success = (data) => dispatch(userActions.receiveAllUsers(data));
      return fetchAllUsers(success, error);
    }
    case userActions.FETCH_SINGLE_USER: {
      const success = (data) => dispatch(userActions.receiveSingleUser(data));
      error = (data) => dispatch(receiveErrors(data.statusText));
      return fetchSingleUser(action.id, success, error);
    }
    case userActions.UPDATE_USER: {
      const success = (data) => dispatch(userActions.receiveSingleUser(data));
      error = (data) => dispatch(receiveErrors(data));
      return updateUser(action.id, action.formData, success, error);
    }
    default:
      return next(action);
  }
};

export default userMiddleware;
