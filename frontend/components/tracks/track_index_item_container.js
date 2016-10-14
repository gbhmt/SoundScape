import { connect } from 'react-redux';
import TrackIndexItem from './track_index_item.jsx';
import { destroyTrack } from '../../actions/track_actions.js';
import { receiveWavesurfer } from '../../actions/wavesurfer_actions.js';
import { addWavesurfer } from '../../actions/player_actions.js';
import { findPlayerTrackIdx } from '../../util/selectors.js';


const mapStateToProps = ({ currentUser, wavesurfers, playerTracks }, ownProps) => ({
  currentUser,
  wavesurfer: wavesurfers[ownProps.track.id]
 });

export default connect(
  mapStateToProps,
  { destroyTrack, receiveWavesurfer, addWavesurfer }
)(TrackIndexItem);
