import * as trackActions from '../actions/track_actions.js';
import { receiveErrors, clearErrors } from '../actions/error_actions.js';
import * as TrackAPI from '../util/track_api_util.js';
import { findPlayerTrackIdx } from '../util/selectors.js';
import { removeWavesurfer } from '../actions/player_actions.js';


const trackMiddleware = ({ getState, dispatch}) => (next) => (action) => {
  let error = (data) => dispatch(receiveErrors(data.responseJSON));
  switch (action.type) {
    case trackActions.FETCH_ALL_TRACKS: {
      const success = (data) => dispatch(trackActions.receiveAllTracks(data));
      return TrackAPI.fetchAllTracks(success, error);
    }
    case trackActions.FETCH_SINGLE_TRACK: {
      const success = (data) => dispatch(trackActions.receiveSingleTrack(data));
      error = (data) => dispatch(receiveErrors(data.statusText));
      return TrackAPI.fetchSingleTrack(action.id, success, error);
    }
    case trackActions.CREATE_TRACK: {
      const success = (data) => dispatch(trackActions.receiveSingleTrack(data));
      return TrackAPI.createTrack(action.formData, success, error);
    }
    case trackActions.UPDATE_TRACK: {
      const success = (data) => dispatch(trackActions.receiveSingleTrack(data));
      return TrackAPI.updateTrack(action.id, action.formData, success, error);
    }
    case trackActions.DESTROY_TRACK: {

      const success = (data) => {
        const idx = findPlayerTrackIdx(getState().playerTracks.stack, data);
        if (idx !== -1) {
          dispatch(removeWavesurfer(idx));
        }
        next(trackActions.destroyTrack(data.id));
      };
      return TrackAPI.destroyTrack(action.id, success, error);
    }
    default:
      return next(action);
  }
};

export default trackMiddleware;
