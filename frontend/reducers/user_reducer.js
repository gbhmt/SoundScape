import { RECEIVE_ALL_USERS, RECEIVE_SINGLE_USER } from '../actions/user_actions.js';
import { RECEIVE_SINGLE_TRACK, DESTROY_TRACK } from '../actions/track_actions.js';
import { RECEIVE_SINGLE_COMMENT, DESTROY_COMMENT } from '../actions/comment_actions.js';
import merge from 'lodash/merge';


const userReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SINGLE_USER:
      return {[action.user.id]: action.user};
    case RECEIVE_SINGLE_TRACK:
      if (state[action.track.user_id]) {
        let newTracks = merge({}, state[action.track.user_id].tracks);
        if (newTracks[action.track.id]) {
          newTracks[action.track.id] = action.track;
        } else {
          newTracks[action.track.id] = action.track;
        }
        return merge({}, state, { [action.track.user_id]: {tracks: newTracks}});
      }
      return state;
    case DESTROY_TRACK:
      if (Object.keys(state)[0]) {
        const newTracks = merge({}, state[Object.keys(state)].tracks)
        const newState = merge({}, state);
        delete newTracks[action.id];
        newState[Object.keys(newState)].tracks = newTracks;
        return newState;
      }
      return state;
      case RECEIVE_SINGLE_COMMENT: {
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

export default userReducer;
