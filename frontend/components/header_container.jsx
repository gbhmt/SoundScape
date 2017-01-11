import { connect } from 'react-redux';
import { logout } from '../actions/session_actions.js';
import { clearErrors } from '../actions/error_actions.js';
import Header from './header.jsx';

const mapStateToProps = ({ currentUser }) => ({ currentUser });


export default connect(
  mapStateToProps,
  { logout, clearErrors }
)(Header);
