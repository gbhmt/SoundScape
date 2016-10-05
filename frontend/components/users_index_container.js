import { connect } from 'react-redux';
import { usersIndex } from './users_index.jsx';

const mapStateToProps = ({ currentUser, users }) => ({ currentUser, users });
