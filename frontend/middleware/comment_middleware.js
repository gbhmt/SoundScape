import * as CommentActions from '../actions/comment_actions.js';
import { createComment, destroyComment } from '../util/comment_api_util.js';


const commentMiddleware = ({ dispatch }) => (next) => (action) => {
  switch (action.type) {
    case CommentActions.CREATE_COMMENT: {
      const success = (data) => dispatch(CommentActions.receiveSingleTrack(data));
      return createComment(action.comment);
    }
    case CommentActions.DESTROY_COMMENT: {
      const success = (data) => dispatch(CommentActions.destroyTrack(data));
      return destroyComment(action.comment);
    }
    default:
      return next(action);
  }
};
