import { applyMiddleware } from 'redux';
import sessionMiddleware from './session_middleware.js';
import userMiddleware from './user_middleware.js';

const rootMiddleware = applyMiddleware(sessionMiddleware, userMiddleware);

export default rootMiddleware;
