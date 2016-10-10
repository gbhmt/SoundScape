import { connect } from 'react-redux';
import Wavesurfer from './wavesurfer.jsx';
import { receiveWavesurfer } from '../actions/wavesurfer_actions.js';


const mapStateToProps = ({ wavesurfers }) => ({
  wavesurfers
});

export default connect(
  mapStateToProps,
  {receiveWavesurfer}
)(Wavesurfer);
