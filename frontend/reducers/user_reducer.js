import { RECEIVE_ALL_USERS, RECEIVE_SINGLE_USER } from '../actions/user_actions.js';


const userReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;
    case RECEIVE_SINGLE_USER:
      return [...state, action.user];
    default:
      return state;
  }
};

export default userReducer;
