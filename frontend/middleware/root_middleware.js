import { applyMiddleware } from 'redux';
import sessionMiddleware from './session_middleware.js';

const rootMiddleware = applyMiddleware(sessionMiddleware);

export default rootMiddleware;
