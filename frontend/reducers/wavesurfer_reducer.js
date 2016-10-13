import { RECEIVE_WAVESURFER, DESTROY_WAVESURFER } from '../actions/wavesurfer_actions.js';
import merge from 'lodash/merge';

const wavesurferReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_WAVESURFER: {
      const newState = merge({}, state);
      newState[action.trackId] = action.wavesurfer;
      return newState;
    }
    case DESTROY_WAVESURFER: {
      const newState = {};
      Object.keys(state).forEach((key) => {
        if (key !== action.trackId) {
          newState[key] = state[key];
        }
      });
      return newState;
    }
    default:
      return state;
  }
};

export default wavesurferReducer;
