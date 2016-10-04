import React from 'react';
import { connect } from 'react-redux';
import { login, signup } from '../actions/session_actions.js';
import SessionForm from './session_form.jsx';

const mapStateToProps = ({ session: {currentUser, errors } }) => {
  const currentUserExists = currentUser ? true : false;
  return {
    loggedIn: currentUserExists,
    errors
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.location.pathname === "/login" ? login : signup;
  return {
    formType: ownProps.location.pathname.slice(1),
    processForm: (user) => dispatch(action(user))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
