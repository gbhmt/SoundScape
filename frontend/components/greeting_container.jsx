import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions.js';
import Greeting from './greeting.jsx';

const mapStateToProps = ({ session: { currentUser } }) => ({currentUser});


export default connect(
  mapStateToProps,
  {logout}
)(Greeting);
