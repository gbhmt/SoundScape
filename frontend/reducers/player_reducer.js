import { RECEIVE_WAVESURFER, REMOVE_WAVESURFER } from '../actions/player_actions.js';

const playerReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_WAVESURFER:
      return [ action.wavesurfer ];
    case REMOVE_WAVESURFER:
      return {};
    default:
      return state;
  }
};
