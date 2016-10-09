import React from 'react';
import { Link } from 'react-router';


class TrackIndexItem extends React.Component {
  componentDidMount () {
    const wavesurfer = WaveSurfer.create({
      container: `#waveform-${this.props.track.id}`,
      cursorWidth: 0,
      maxCanvasWidth: 618,
      height: 60,
      barWidth: 2,
      waveColor: "#ccc",
      progressColor: "orange"
    });
    wavesurfer.load(this.props.track.track_file_url);
  }



  render () {
    const waveform = `waveform-${this.props.track.id}`;
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
          <img className="track-item-play-button" src={ window.SoundScapeAssets.playButton }/>
          <span className="track-artist-and-title">
            <Link to={ userUrl } className="track-item-display-name">{ track.user_display_name }</Link>
            <Link to={ trackUrl } className="track-item-url">{ track.title }</Link>
          </span>
          <p className="track-item-created-at">{ track.created_at }</p>
          { deleteTrack }
          { editTrack }
          <div className="waveform" id={ waveform }></div>
        </div>
      </li>
    );
  }
}

export default TrackIndexItem;
