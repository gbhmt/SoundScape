import React from 'react';
import { trackIdxinPlayer } from '../util/selectors.js';


class Player extends React.Component {
  constructor(props) {
    super(props);
    this.currentTrack = null;
  }

  componentDidMount () {
    if (this.props.playerTracks.stack[0]) {
      this.receiveTrack();
    }
  }

  componentDidUpdate () {
    if (this.props.playerTracks.stack[0]) {
      this.receiveTrack();
    }
   }

   componentWillUpdate (nextProps) {
     if (!nextProps.playerTracks.stack[0] && nextProps.playerTracks.isPlaying) {
       debugger
       this.currentTrack = null;
       this.props.playPause();
     }
   }

  receiveTrack () {
    if (!this.currentTrack) {
      this.currentTrack = this.props.playerTracks.stack[0];
      this.currentTrack.wavesurfer.play();
      if (!this.currentTrack.wavesurfer.handlers) {
        this.currentTrack.wavesurfer.on('finish', () => {
          this.currentTrack.wavesurfer.seekTo(0);
          this.props.removeWavesurfer(0);
        });
      }
      this.forceUpdate();
    } else if (this.currentTrack.track.id !== this.props.playerTracks.stack[0].track.id) {
      this.currentTrack.wavesurfer.stop();
      this.currentTrack = this.props.playerTracks.stack[0];
      this.currentTrack.wavesurfer.play();
      if (!this.currentTrack.wavesurfer.handlers) {
        this.currentTrack.wavesurfer.on('finish', () => {
          this.currentTrack.wavesurfer.seekTo(0);
          this.props.removeWavesurfer(0);
        });
      }
      this.forceUpdate();
    } else if (this.props.playerTracks.isPlaying) {
      this.currentTrack.wavesurfer.play();
    } else {
      this.currentTrack.wavesurfer.pause();
    }


  }

  render () {
    let trackArtist;
    let trackTitle;
    let trackBadgeUrl;
    let buttonUrl;
    if (this.props.playerTracks.isPlaying) {
      buttonUrl = window.SoundScapeAssets.playerPause;
    } else {
      buttonUrl = window.SoundScapeAssets.playerPlay;
    }
    if (this.currentTrack) {
      trackArtist = this.currentTrack.track.user_display_name;
      trackTitle = this.currentTrack.track.title;
      trackBadgeUrl = this.currentTrack.track.image_url;
      return (
        <footer className="player-container">
          <div className="player-ui group">
            <img className="player-play-button" src={ buttonUrl } onClick={ this.props.playPause }
              disabled={ !this.props.playerTracks.stack[0] }>
            </img>
            <button className="next-track-button">

            </button>
            <div className="playbar-container">
              <div className="progress"></div>
            </div>
            <div className="player-track-info">
              <img className="player-track-badge" src={ trackBadgeUrl }/>
              <div className="player-track-and-artist group">
                <span className="player-track-artist">{ trackArtist }</span>
                <span className="player-track-title">{ trackTitle }</span>
              </div>
            </div>
          </div>
        </footer>
      );
    } else {
      return <div></div>;
    }

  }

}

export default Player;
