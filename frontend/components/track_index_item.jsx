import React from 'react';
import { Link } from 'react-router';
import WavesurferContainer from './wavesurfer_container.js';


class TrackIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
  }

  // componentDidMount () {
  //   if (!this.props.wavesurfer) {
  //     const wavesurfer = <WavesurferContainer track={ this.props.track } type="indexItem"/>;
  //     this.props.receiveWavesurfer(wavesurfer);
  //   }
  // }

  play () {
    this.props.wavesurfer.playPause();
  }

  render () {
    const { track, currentUser, handleModal, destroyTrack } = this.props;
    const userUrl = `/users/${track.user_id}`;
    const trackUrl = `/tracks/${track.id}`;
    let editTrack;
    let deleteTrack;
    if (currentUser && currentUser.id === track.user_id) {
      editTrack = <button className="edit-track" onClick={ () => handleModal(track) }>Edit</button>;
      deleteTrack = <button className="delete" onClick={ () => destroyTrack(track.id) }>Delete</button>;
    }
    return (
      <li className="track-item-container group">
        <Link to={ trackUrl }>
          <img className="track-item-pic" src={ track.image_url }/>
        </Link>
        <div className="track-item-body">
          <img className="track-item-play-button" src={ window.SoundScapeAssets.playButton } onClick={ this.play }/>
          <span className="track-artist-and-title">
            <Link to={ userUrl } className="track-item-display-name">{ track.user_display_name }</Link>
            <Link to={ trackUrl } className="track-item-url">{ track.title }</Link>
          </span>
          <p className="track-item-created-at">{ track.created_at }</p>
          { deleteTrack }
          { editTrack }
        </div>
        <WavesurferContainer track={ this.props.track } type="indexItem"/>
      </li>
    );
  }
}

export default TrackIndexItem;
