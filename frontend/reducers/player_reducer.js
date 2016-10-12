import { ADD_WAVESURFER, REMOVE_WAVESURFER, PLAY_PAUSE } from '../actions/player_actions.js';
import merge from 'lodash/merge';

const playerReducer = (state = {isPlaying: false, stack: []}, action) => {
  switch (action.type) {
    case ADD_WAVESURFER: {
      const newState = merge({}, state);
      newState.stack.unshift({ wavesurfer: action.wavesurfer, track: action.track});
      newState.isPlaying = true;
      return newState;
    }
    case REMOVE_WAVESURFER: {
      const newState = merge({}, state);
      newState.stack.splice(action.idx, 1)
      return newState;
    }
    case PLAY_PAUSE: {
      const newState = merge({}, state);
      newState.isPlaying = !state.isPlaying;
      return newState;
    }
    default:
      return state;
  }
};

export default playerReducer;
