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
    border          : '1px solid #ccc',
    padding         : '20px',
    zIndex         : 11
  }
}

const App = ({ children }) => (
  <div>
    <HeaderContainer style={ modalStyle } />
    { children }
  </div>
);

export default App;
