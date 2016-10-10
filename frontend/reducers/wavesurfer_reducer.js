import { RECEIVE_WAVESURFER } from '../actions/wavesurfer_actions.js';
import merge from 'lodash/merge';

const wavesurferReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_WAVESURFER:
      const newState = merge({}, state);
      newState[action.trackId] = action.wavesurfer;
      return newState;
    default:
      return state;
  }
};

export default wavesurferReducer;
