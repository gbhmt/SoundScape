import { connect } from 'react-redux';
import { updateTrack, createTrack } from '../util/track_api_util.js';
import TrackForm from './track_form.jsx';

const mapStateToProps = ({ currentUser }) => ({ currentUser });

export default connect(
  mapStateToProps,
  { updateTrack, createTrack }
)(TrackForm);
