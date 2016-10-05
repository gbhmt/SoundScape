import React from 'react';
import HeaderContainer from './header_container.jsx';

var modalStyle = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(255, 255, 255, 0.75)',
    zIndex         : 10
  },
  content : {
    position        : 'fixed',
    top             : '100px',
    left            : '150px',
    right           : '150px',
    bottom          : '100px',
    height          : '500px',
    width           : '400px',
    margin          : '0 auto',
    padding         : '25px',
    border          : '0',
    borderRadius    : '0',
    zIndex         : 11,
  }
};

const App = ({ children }) => (
  <div>
    <HeaderContainer style={ modalStyle } />
    { children }
  </div>
);

export default App;
