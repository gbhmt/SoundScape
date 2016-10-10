import { connect } from 'react-redux';
import TrackIndexItem from './track_index_item.jsx';
import { destroyTrack } from '../actions/track_actions.js';
import { receiveWavesurfer } from '../actions/wavesurfer_actions.js';


const mapStateToProps = ({ currentUser, wavesurfers }, ownProps) => ({
  currentUser,
  wavesurfer: wavesurfers[ownProps.track.id]
 });

export default connect(
  mapStateToProps,
  { destroyTrack, receiveWavesurfer }
)(TrackIndexItem);
