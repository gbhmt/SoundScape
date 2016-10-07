import React from 'react';
import TrackFormContainer from './track_form.jsx';
import Modal from 'react-modal';


class TrackShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
  }

  componentDidMount () {
    if (!this.props.track) {
      this.props.fetchSingleTrack(this.props.params.id);
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.track && this.props.track.id !== parseInt(nextProps.params.id)) {
      this.props.fetchSingleTrack(nextProps.params.id);
    }
  }

  openModal () {
    this.setState({ modalOpen: true });
  }

  closeModal () {
    this.setState({ modalOpen: false });
  }

  savePic (e) {
    const formData = new FormData();
    if (typeof e.currentTarget.files[0] === "undefined") {
      return;
    }
    formData.append("track[image]", e.currentTarget.files[0]);
    this.props.updateTrack(this.props.track.id, formData);
  }

  render () {
    const { currentUser, track } = this.props;
    let uploadImage;
    let editTrack;
    let deleteTrack;
    if (track) {
      if (currentUser && currentUser.id === track.user_id) {
        uploadImage = <label htmlFor="update-image">Update image
          <input
          id="update-image"
          className="update-track-image"
          type="file"
          onChange={ (e) => this.savePic(e) }/></label>;
        editTrack = <button className="edit" onClick={ this.openModal }>Edit</button>;
        deleteTrack = <button className="delete" onClick={ this.props.destroyTrack }>Delete</button>
      }
      return (
        <div className="track-show-container">
          <header className="track-show-header">
            <div className="sub-header">
              <img className="play-button" />
              <h2 className="artist-header">{ track.user.display_name }</h2>
              <h1 className="track-title">{ track.title }</h1>
              <h3 className="upload-time">{ track.created_at }</h3>
              <div id="waveform"></div>
            </div>
            <img className="track-image" src={ track.image_url }/>
          </header>

          <div className="buttons-and-field">
            { editTrack }
            { deleteTrack }
          </div>

          <article className="track-main-content">
            <aside className="track-user-aside">
              <img className="track-user-image" src={ track.user.profile_picture_url }/>
              <h3 className="artist-label">{ track.user.display_name }</h3>
            </aside>
            <section className="desc-and-comments">
              <p>{ track.description }</p>
            </section>

          </article>
        </div>
      );
    } else {
      return (
        <h1></h1>
      );
     }
  }
}

export default TrackShow;
