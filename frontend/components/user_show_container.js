import { connect } from 'react-redux';
import UserShow from './user_show.jsx';
import { fetchSingleUser, updateUser, destroyUser } from '../actions/user_actions.js';


const mapStateToProps = ({ currentUser, user }, ownProps) => ({
  currentUser,
  user: user[ownProps.params.id]
});


export default connect(
  mapStateToProps,
  { fetchSingleUser, updateUser }
)(UserShow);
