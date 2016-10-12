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

  receiveTrack () {
    if (!this.currentTrack) {
      this.currentTrack = this.props.playerTracks.stack[0];
      this.currentTrack.wavesurfer.play();
      this.currentTrack.wavesurfer.on('finish', () => {
        this.currentTrack.wavesurfer.seekTo(0);
        this.props.removeWavesurfer(0);
      });
    } else if (this.currentTrack.track.id !== this.props.playerTracks.stack[0].track.id) {
      this.currentTrack.wavesurfer.stop();
      this.currentTrack.wavesurfer.un('finish', () => {
        this.currentTrack.wavesurfer.seekTo(0);
        this.props.removeWavesurfer(0);
      });
      this.currentTrack = this.props.playerTracks.stack[0];
      this.currentTrack.wavesurfer.play();
      this.currentTrack.wavesurfer.on('finish', () => {
        this.currentTrack.wavesurfer.seekTo(0);
        this.props.removeWavesurfer(0);
      });
    } else if (this.props.playerTracks.isPlaying) {
      this.currentTrack.wavesurfer.play();
    } else {
      this.currentTrack.wavesurfer.pause();
    }


  }

  render () {
    return (
      <button disabled={ !this.props.playerTracks.stack[0] } onClick={ this.playPause }>CLICK ME</button>
    );
  }

}

export default Player;
