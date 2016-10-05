import { RECEIVE_ALL_USERS, RECEIVE_SINGLE_USER } from '../actions/user_actions.js';
import merge from 'lodash/merge';


const userReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      const result = {};
      action.users.forEach((user) => {
        result[user.id] = user;
      });
      return result;
    case RECEIVE_SINGLE_USER:
      return merge({}, state, {[action.user.id]: action.user});
    default:
      return state;
  }
};

export default userReducer;
