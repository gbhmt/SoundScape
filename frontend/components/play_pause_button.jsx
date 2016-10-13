import React from 'react';




class PlayPauseButton extends React.Component {
  constructor(props) {
    super(props);
    this.togglePlay = this.togglePlay.bind(this);
  }

  isCurrentTrack () {
    return this.props.trackIdxinPlayer === 0;
  }

  togglePlay () {
    if (this.isCurrentTrack()) {
      this.props.playPause();
    } else if (this.props.trackIdxinPlayer === -1) {
      this.props.addWavesurfer(this.props.wavesurfer, this.props.track);
    } else {
      this.props.removeWavesurfer(this.props.trackIdxinPlayer);
      this.props.addWavesurfer(this.props.wavesurfer, this.props.track);
    }
  }

  render () {
    let button;
    if (this.isCurrentTrack() && this.props.isPlaying) {
      button = window.SoundScapeAssets.pauseButton;
    } else {
      button = window.SoundScapeAssets.playButton;
    }
    let type;
    if (this.props.type === "indexItem") {
      type = "track-item-play-button";
    } else {
      type = "play-button";
    }
    return (
      <img className={ type + " welcome-button" } src={ button } onClick={ this.togglePlay }/>
    );
  }
}

export default PlayPauseButton;
