import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import configureStore from './store/store.js';
import Root from './components/root.jsx';
import merge from 'lodash/merge';
import { fetchAllTracks } from './actions/track_actions.js';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { currentUser: window.currentUser };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
  window.merge = merge;
  window.fetchAllTracks = fetchAllTracks;

  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={ store } />, document.getElementById("root"));
});
