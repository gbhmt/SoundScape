import * as CommentActions from '../actions/comment_actions.js';
import { createComment, destroyComment } from '../util/comment_api_util.js';


const commentMiddleware = ({ dispatch }) => (next) => (action) => {
  switch (action.type) {
    case CommentActions.CREATE_COMMENT: {
      const success = (data) => dispatch(CommentActions.receiveSingleComment(data));
      return createComment(action.comment, success);
    }
    case CommentActions.DESTROY_COMMENT: {
      const success = (data) => next(action);
      return destroyComment(action.comment, success);
    }
    default:
      return next(action);
  }
};

export default commentMiddleware;
