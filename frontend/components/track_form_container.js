import { connect } from 'react-redux';
import { updateTrack, createTrack } from '../actions/track_actions.js';
import TrackForm from './track_form.jsx';

const mapStateToProps = ({ currentUser, errors }, ownProps) => ({
   currentUser,
   errors,
   track: ownProps.track
});

export default connect(
  mapStateToProps,
  { updateTrack, createTrack }
)(TrackForm);
