import React from 'react';
import { Link } from 'react-router';
import WavesurferContainer from './wavesurfer_container.js';
import PlayPauseButtonContainer from './play_pause_button_container.js';


class TrackIndexItem extends React.Component {
  constructor(props) {
    super(props);
    // this.toggleTrack = this.toggleTrack.bind(this);

  }

  // toggleTrack () {
  //   if (this.props.wavesurfer && this.props.wavesurfer.isPlaying()) {
  //     this.props.wavesurfer.pause();
  //   } else {
  //     if (!this.props.trackInPlayer) {
  //       this.props.addWavesurfer(this.props.wavesurfer, this.props.track);
  //     } else {
  //       this.props.wavesurfer.play();
  //     }
  //   }
  // }

  render () {
    const { track, currentUser, handleModal, destroyTrack, wavesurfer } = this.props;
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
          <PlayPauseButtonContainer wavesurfer={ wavesurfer } track={ track } type="indexItem"/>
          <span className="track-artist-and-title">
            <Link to={ userUrl } className="track-item-display-name">{ track.user_display_name }</Link>
            <Link to={ trackUrl } className="track-item-url">{ track.title }</Link>
          </span>
          <p className="track-item-created-at">{ track.created_at }</p>
          { deleteTrack }
          { editTrack }
        </div>
        <WavesurferContainer track={ this.props.track } type="indexItemWave"/>
      </li>
    );
  }
}

export default TrackIndexItem;
