import React from 'react';
import { connect } from 'react-redux';
import { login, signup } from '../actions/session_actions.js';
import { clearErrors } from '../actions/error_actions.js';
import SessionForm from './session_form.jsx';

const mapStateToProps = ({ currentUser, errors }) => {
  const currentUserExists = currentUser ? true : false;
  return {
    loggedIn: currentUserExists,
    errors
  }
};



export default connect(
  mapStateToProps,
  { login, signup, clearErrors }
)(SessionForm);
