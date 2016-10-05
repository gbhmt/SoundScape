import { connect } from 'react-redux';
import UserShow from './user_show.jsx';
import { fetchSingleUser, updateUser } from '../actions/user_actions.js';


const mapStateToProps = ({ currentUser, users }) => ({ currentUser, users });

export default connect(
  mapStateToProps,
  { fetchSingleUser, updateUser }
)(UserShow);
