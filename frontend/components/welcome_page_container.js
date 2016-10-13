import { connect } from 'react-redux';
import WelcomePage from './welcome_page.jsx';
import { allTracks } from '../util/selectors.js';
import { fetchAllTracks } from '../actions/track_actions.js';


const mapStateToProps = ({ tracks, wavesurfers }) => ({
   tracks: allTracks(tracks),
   wavesurfers
 });

export default connect(
  mapStateToProps,
  { fetchAllTracks }
)(WelcomePage);
