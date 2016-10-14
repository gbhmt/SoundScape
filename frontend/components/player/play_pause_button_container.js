import { connect } from 'react-redux';
import { addWavesurfer, playPause, removeWavesurfer } from '../../actions/player_actions.js';
import { findPlayerTrackIdx } from '../../util/selectors.js';
import PlayPauseButton from './play_pause_button.jsx';


const mapStateToProps = ({ playerTracks }, ownProps) => ({
  isPlaying: playerTracks.isPlaying,
  trackIdxinPlayer: findPlayerTrackIdx(playerTracks.stack, ownProps.track)
});


export default connect(
  mapStateToProps,
  { addWavesurfer, playPause, removeWavesurfer }
)(PlayPauseButton);
