import { RECEIVE_ALL_USERS, RECEIVE_SINGLE_USER } from '../actions/user_actions.js';
import { RECEIVE_SINGLE_TRACK, DESTROY_TRACK } from '../actions/track_actions.js';
import merge from 'lodash/merge';


const userReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SINGLE_USER:
      return {[action.user.id]: action.user};
    case RECEIVE_SINGLE_TRACK:
      if (state[action.track.user.id]) {
        const newTracks = state[action.track.user.id].tracks.slice();
        newTracks.push(action.track.id);
        return merge({}, state, { [action.track.user.id]: {tracks: newTracks}});
      }
      return state;
    case DESTROY_TRACK:
      if (Object.keys(state)[0]) {
        const newTracks = Object.keys(state)[0].tracks.slice();
        const idx = newTracks.indexOf(action.track.user.id);
        newTracks.splice(idx, 1);
        return merge({}, state, { [Object.keys(state)[0]]: {tracks: newTracks}});
      }
      return state;
    default:
      return state;
  }
};

export default userReducer;
