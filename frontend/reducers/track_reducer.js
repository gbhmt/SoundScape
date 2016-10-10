import { RECEIVE_ALL_TRACKS,
        RECEIVE_SINGLE_TRACK,
        DESTROY_TRACK } from '../actions/track_actions.js';
import { RECEIVE_SINGLE_COMMENT, DESTROY_COMMENT } from '../actions/comment_actions.js';
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
    case DESTROY_TRACK: {
      const newState = merge({}, state);
      delete newState[action.id];
      return newState;
    }
    case RECEIVE_SINGLE_COMMENT: {
      debugger
      const newComments = merge({}, state[action.comment.commentable_id].comments);
      newComments[action.comment.id] = action.comment;
      return merge({}, state, {[action.comment.commentable_id]: {comments: newComments}});
      }
    case DESTROY_COMMENT: {
      const newState = merge({}, state);
      const newComments = newState[action.comment.commentable_id].comments;
      delete newComments[action.comment.id];
      newState[action.comment.commentable_id].comments = newComments;
      return newState;
    }
    default:
      return state;
  }
};

export default trackReducer;
