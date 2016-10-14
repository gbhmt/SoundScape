import { connect } from 'react-redux';
import Wavesurfer from './wavesurfer.jsx';
import { receiveWavesurfer } from '../../actions/wavesurfer_actions.js';


const mapStateToProps = ({ wavesurfers }, ownProps) => ({
  wavesurfer: wavesurfers[ownProps.track.id]
});

export default connect(
  mapStateToProps,
  {receiveWavesurfer}
)(Wavesurfer);
