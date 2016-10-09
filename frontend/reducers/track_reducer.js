import { RECEIVE_ALL_TRACKS,
        RECEIVE_SINGLE_TRACK,
        DESTROY_TRACK } from '../actions/track_actions.js';
import merge from 'lodash/merge';

const trackReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_TRACKS:
      const result = {};
      action.tracks.forEach((track) => {
        result[track.id] = track;
      });
      return result;
    case RECEIVE_SINGLE_TRACK:
      return merge({}, state, {[action.track.id]: action.track});
    case DESTROY_TRACK:
      const newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default trackReducer;
