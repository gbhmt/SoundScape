import { applyMiddleware } from 'redux';
import sessionMiddleware from './session_middleware.js';
import userMiddleware from './user_middleware.js';
import trackMiddleware from './track_middleware.js';

const rootMiddleware = applyMiddleware(
  sessionMiddleware,
  userMiddleware,
  trackMiddleware);

export default rootMiddleware;
