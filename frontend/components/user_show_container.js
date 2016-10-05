import { connect } from 'react-redux';
import UserShow from './user_show.jsx';
import { fetchSingleUser, updateUser } from '../actions/user_actions.js';


const mapStateToProps = ({ currentUser, users }, ownProps) => ({
  currentUser,
  user: users[ownProps.params.id]
});


export default connect(
  mapStateToProps,
  { fetchSingleUser, updateUser }
)(UserShow);
