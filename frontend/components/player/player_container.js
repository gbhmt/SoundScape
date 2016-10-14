import { connect } from 'react-redux';
import { removeWavesurfer, playPause } from '../../actions/player_actions.js';
import Player from './player.jsx';


const mapStateToProps = ({ playerTracks }) => ({ playerTracks });

export default connect(
  mapStateToProps,
  { removeWavesurfer, playPause }
)(Player);
