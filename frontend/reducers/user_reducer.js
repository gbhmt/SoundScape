import { RECEIVE_ALL_USERS, RECEIVE_SINGLE_USER } from '../actions/user_actions.js';
import { RECEIVE_SINGLE_TRACK } from '../actions/track_actions.js';
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
    case RECEIVE_SINGLE_TRACK:
      const newTracks = state[action.track.user_id].tracks.slice();
      newTracks.push(action.track.id);
      return merge({}, state, { [action.track.user_id]: {tracks: newTracks}});
    default:
      return state;
  }
};

export default userReducer;
