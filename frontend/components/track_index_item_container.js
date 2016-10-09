import { connect } from 'react-redux';
import TrackIndexItem from './track_index_item.jsx';
import { destroyTrack } from '../actions/track_actions.js';


const mapStateToProps = ({ currentUser }) => ({ currentUser });

export default connect(
  mapStateToProps,
  { destroyTrack }
)(TrackIndexItem)
