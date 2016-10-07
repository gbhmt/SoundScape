import { connect } from 'react-redux';
import TrackShow from './track_show.jsx';
import { fetchSingleTrack, updateTrack, destroyTrack } from '../actions/track_actions.js';


const mapStateToProps = ({ currentUser, tracks, users }, ownProps) => ({
  currentUser,
  track: tracks[ownProps.params.id],
  // user:
});

export default connect(
  mapStateToProps,
  { fetchSingleTrack, updateTrack, destroyTrack }
)(TrackShow);
