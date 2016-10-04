import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer.js';
import rootMiddleware from '../middleware/root_middleware.js';

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    rootMiddleware
  )
);

export default configureStore;
