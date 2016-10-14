import { connect } from 'react-redux';
import TrackShow from './track_show.jsx';
import { fetchSingleTrack, updateTrack, destroyTrack } from '../actions/track_actions.js';
import { clearErrors } from '../actions/error_actions.js';


const mapStateToProps = ({ currentUser, tracks, wavesurfers }, ownProps) => ({
  currentUser,
  track: tracks[ownProps.params.id],
  wavesurfer: wavesurfers[ownProps.params.id]
});

export default connect(
  mapStateToProps,
  { fetchSingleTrack, updateTrack, destroyTrack, clearErrors }
)(TrackShow);
