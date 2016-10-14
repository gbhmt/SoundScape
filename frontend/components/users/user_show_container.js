import { connect } from 'react-redux';
import UserShow from './user_show.jsx';
import { fetchSingleUser, updateUser, destroyUser } from '../../actions/user_actions.js';
import { receiveAllTracks } from '../../actions/track_actions.js';
import { clearErrors } from '../../actions/error_actions.js';


const mapStateToProps = ({ currentUser, user, errors }, ownProps) => ({
  currentUser,
  user: user[ownProps.params.id],

});


export default connect(
  mapStateToProps,
  { fetchSingleUser, updateUser, receiveAllTracks, clearErrors }
)(UserShow);
