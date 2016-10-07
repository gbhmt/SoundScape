import { RECEIVE_ALL_USERS, RECEIVE_SINGLE_USER } from '../actions/user_actions.js';
import { RECEIVE_SINGLE_TRACK } from '../actions/track_actions.js';
import merge from 'lodash/merge';


const userReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SINGLE_USER:
      return {[action.user.id]: action.user};
    case RECEIVE_SINGLE_TRACK:
    debugger
      if (state[action.track.user.id]) {
        const newTracks = state[action.track.user.id].tracks.slice();
        newTracks.push(action.track.id);
        return merge({}, state, { [action.track.user.id]: {tracks: newTracks}});
      }
      return state;
    default:
      return state;
  }
};

export default userReducer;
