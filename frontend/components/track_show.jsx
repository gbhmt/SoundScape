import React from 'react';
import TrackFormContainer from './track_form_container.js';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router';
import { userModalStyle } from '../util/modal_styles.js';
import nl2br from '../util/newline_to_break.jsx';
import CommentContainer from './comment_container.js';
import CommentFormContainer from './comment_form_container.js';
import { allComments } from '../util/selectors.js';
import WavesurferContainer from './wavesurfer_container.js';
import PlayPauseButtonContainer from './play_pause_button_container.js';


class TrackShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.savePic = this.savePic.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);
    this.play = this.play.bind(this);
  }

  componentDidMount () {
    if (!this.props.track) {
      this.props.fetchSingleTrack(this.props.params.id).then(null, () => {
        this.props.router.push("*");
        this.props.clearErrors();
      });
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

  play () {
    this.props.wavesurfer.playPause();
  }

  handleDestroy () {
    this.props.destroyTrack(this.props.track.id).then(() => {
      this.props.router.goBack();
    });
  }
  render () {
    const { currentUser, track, wavesurfer } = this.props;
    let uploadImage;
    let editTrack;
    let deleteTrack;
    let comments;
    let playPauseButton;
    if (wavesurfer) {
      playPauseButton = <PlayPauseButtonContainer wavesurfer={ wavesurfer } track={ track } type="trackShow"/>
    }
    if (track) {
      if (currentUser && currentUser.id === track.user_id) {
        uploadImage = <label className="update-label" htmlFor="update-image">
          <img src={ window.SoundScapeAssets.cameraIcon }/> Update image
          <input
          id="update-image"
          className="update-track-image"
          type="file"
          onChange={ (e) => this.savePic(e) }/></label>;
        editTrack = <button className="edit-track" onClick={ this.openModal }>Edit</button>;
        deleteTrack = <button className="delete" onClick={ this.handleDestroy }>Delete</button>
      }
      const userLink = `/users/${track.user_id}`;
      if (track.comments) {
        comments = allComments(track.comments).map((comment, idx) => {
          return <CommentContainer key={ idx } comment={ comment }/>;
        });
      }
      return (
        <div className="track-show-container group">
          <header className="track-show-header group">
            <div className="sub-header group">
              { playPauseButton }
              <span className="artist-and-title">
                <span className="heading-wrapper">
                  <Link to={ userLink } className="artist-heading" >{ track.user_display_name }</Link>
                </span>
                <h1 className="track-title">{ track.title }</h1>
              </span>
              <h3 className="upload-time">{ track.created_at }</h3>
              <div id="waveform"></div>
            </div>
            <div className="track-show-image-wrapper">
              <img className="track-show-image" src={ track.image_url }/>
              { uploadImage }
            </div>
            <WavesurferContainer key={ this.props.track.id } track={ this.props.track } type="trackShowWave"/>
          </header>



          <article className="track-main-content group">
            <div className="buttons">
              { editTrack }
              { deleteTrack }
            </div>
            <div className="track-info-wrapper">
              <CommentFormContainer type="Track" track={ track }/>
              <aside className="track-user-aside">

                <Link to={ userLink } className="artist-label">
                  <img className="track-user-image" src={ track.user_profile_picture_url }/>
                </Link>
                <Link to={ userLink } className="artist-label">{ track.user_display_name }</Link>
              </aside>

              <section className="desc-and-comments">
                <p className="description">
                  { track.description }
                </p>
                <ul className="comments-list">
                  { comments }
                </ul>
              </section>
            </div>

          </article>

          <Modal
            isOpen={ this.state.modalOpen }
            onRequestClose={ this.closeModal }
            style={ userModalStyle }>

            <TrackFormContainer track={ track } closeModal={ this.closeModal }/>
          </Modal>

        </div>
      );
    } else {
      return (
        <h1>...</h1>
      );
     }
  }
}

export default withRouter(TrackShow);
