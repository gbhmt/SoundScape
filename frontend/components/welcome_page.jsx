import React from 'react';
import PlayPauseButtonContainer from './player/play_pause_button_container.js';
import WavesurferContainer from './player/wavesurfer_container.js';
import { Link } from 'react-router';


class WelcomePage extends React.Component {
  componentDidMount () {
    this.props.fetchAllTracks(1);
    this.props.fetchAllTracks(2);
  }

  render () {
    if (this.props.tracks) {
      const allTracks = this.props.tracks.slice(0, 12).map((track, idx) => {
        const trackLink = `/tracks/${track.id}`;
        const artistLink = `/users/${track.user_id}`;
        return (
          <li key={ idx } className="welcome-item">
            <Link to={ trackLink } className="cover-link">
              <img className="cover" src={ track.image_url }/>
            </Link>
            <WavesurferContainer track={ track } type="hidden"/>
            <PlayPauseButtonContainer wavesurfer={ this.props.wavesurfers[track.id] } track={ track }/>
            <Link to={ trackLink } className="welcome-track-link">{ track.title }</Link>
            <Link to={ artistLink } className="welcome-profile-link">{ track.user_display_name }</Link>
          </li>
        );
      });
      return (
        <div className="welcome-page-container">
          <div className="welcome-background">
            <h1 className="welcome-heading">SoundScape</h1>
          </div>
          <h1 className="welcome-tracks-heading">Hear what's trending</h1>
          <ul className="welcome-tracks group">
            { allTracks }
          </ul>
        </div>
      );
    } else {
      return <h1>...</h1>;
      }
    }


}

export default WelcomePage;
