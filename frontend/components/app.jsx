import React from 'react';
import HeaderContainer from './header_container.jsx';
import { authModalStyle } from '../util/modal_styles.js';



const App = ({ children }) => (
  <div>
    <HeaderContainer style={ authModalStyle } />
    { children }
  </div>
);

export default App;
