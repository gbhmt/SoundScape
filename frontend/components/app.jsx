import React from 'react';
import HeaderContainer from './header_container.jsx';
import { authModalStyle } from '../util/modal_styles.js';
import PlayerContainer from './player_container.js';



const App = ({ children }) => (
  <div>
    <HeaderContainer />
    { children }
    <PlayerContainer />
  </div>
);

export default App;
