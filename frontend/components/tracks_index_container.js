import { connect } from 'react-redux';
import TracksIndex from './tracks_index.jsx';
import { fetchAllTracks } from '../actions/track_actions.js';
import { allTracks } from '../util/selectors.js';


const mapStateToProps = ({ currentUser, tracks }) => ({
  currentUser,
  tracks: allTracks(tracks),
  currentPage: tracks.currentPage,
  numPages: tracks.numPages
});

export default connect(
  mapStateToProps,
  { fetchAllTracks }
)(TracksIndex);
