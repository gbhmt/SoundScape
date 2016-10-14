import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app.jsx';
import UserShowContainer from './user_show_container.js';
import TrackShowContainer from './track_show_container.js';
import TracksIndexContainer from './tracks_index_container.js';
import WelcomePageContainer from './welcome_page_container.js';
import NotFound from './not_found.jsx';





const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().currentUser) {
      replace("/");
    }
  };
  const missing = Router.NotFoundRoute;
  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ WelcomePageContainer }/>
          <Route path="/tracks" component={ TracksIndexContainer } />
          <Route path="users/:id" component={ UserShowContainer } />
          <Route path="tracks/:id" component={ TrackShowContainer } />
          <Route path="*" component={ NotFound } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
