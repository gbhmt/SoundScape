import React from 'react';
import { userModalStyle } from '../util/modal_styles.js';
import UserForm from './user_form.jsx';
import Modal from 'react-modal';
import nl2br from '../util/newline_to_break.jsx';
import TrackIndexItemContainer from './track_index_item_container.js';
import TrackFormContainer from './track_form_container.js';
import { allTracks } from '../util/selectors.js';


class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  modalOpen: false, modalType: "" };
    this.savePic = this.savePic.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  componentDidMount () {
    this.props.fetchSingleUser(this.props.params.id);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.user && this.props.user.id !== parseInt(nextProps.params.id)) {
      this.props.fetchSingleUser(nextProps.params.id);
    }
  }

  openModal () {
    this.setState({ modalOpen: true });
  }

  closeModal () {
    this.setState({ modalOpen: false });
  }

  handleModal (action) {
    this.setState({ modalType: action, modalOpen: true });
  }

  savePic (type, e) {
    const formData = new FormData();
    if (typeof e.currentTarget.files[0] === "undefined") {
      return;
    }
    formData.append(`user[${type}]`, e.currentTarget.files[0]);
    this.props.updateUser(this.props.user.id, formData);
  }

  render () {
    const { currentUser, user } = this.props;
    let uploadProfilePicture;
    let editProfile;
    let uploadBackground;
    let modalForm;
    if (this.state.modalType === "editProfile") {
      modalForm = <UserForm closeModal={ this.closeModal }
                    updateUser={ this.props.updateUser }
                    user={ this.props.user } />;
    } else {
      modalForm = <TrackFormContainer track={ this.state.modalType } closeModal={ this.closeModal }/>;
    }
    if (user) {
      if (currentUser && (currentUser.id === user.id)) {
        uploadProfilePicture = <label htmlFor="update-image">
          <img src={ window.SoundScapeAssets.cameraIcon }/> Update image
          <input
          id="update-image"
          className="upload-profile"
          type="file"
          onChange={ (e) => this.savePic("profile_picture", e) }/></label>;
        editProfile = <button className="edit" onClick={ () => this.handleModal("editProfile") }>Edit</button>;
        uploadBackground = <label htmlFor="upload-background">
          <img src={ window.SoundScapeAssets.cameraIcon }/> Update header background
          <input
          id="upload-background"
          className="upload-background"
          type="file"
          onChange={ (e) => this.savePic("header_background", e) }/></label>;
      }
      const fullName = user.first_name + " " + user.last_name;
      let location;
      if (user.city && user.country) {
        location = user.city + ", " + user.country;
      } else {
        location = user.city + user.country;
      }
      let hideName;
      let hideCity;
      let hideDisplayName;
      if (fullName === " ") {
        hideName = "hidden";
      }
      if (location === "") {
        hideCity = "hidden";
      }
      if (user.display_name === "") {
        hideDisplayName = "hidden";
      }
      let backgroundImage;
      if (user.header_background_url === "/header_backgrounds/original/missing.png") {
        backgroundImage = "linear-gradient(315deg, rgb(218, 218, 215) 0%, rgb(104, 94, 93) 100%)";
      } else {
        backgroundImage = `url(${user.header_background_url})`;
      }
      let userTracks;
      if (user.tracks) {
          userTracks = allTracks(user.tracks).map((track, idx) => {
          return <TrackIndexItemContainer handleModal={ this.handleModal } key={ idx } track={ track } />;
        });
      }
      return (
        <div className="content-header group">
          <header style={ { backgroundImage } }
              className="user-header-container group">
            <span className="profile-picture">
            <img className="profile-picture-image" src={ user.profile_picture_url } />
            { uploadProfilePicture }
            </span>
            <div className="user-header">
              <h1 className={ hideDisplayName }>{ user.display_name }</h1><br />
              <h2 className={ hideName }>{ fullName }</h2><br />
              <h3 className={ hideCity }>{ location }</h3>
            </div>
            { uploadBackground }

          </header>

          <div className="heading-and-edit group">
            <h1 className="user-tracks-heading">Tracks</h1>
            { editProfile }
          </div>
          <section className="main-content group">
            <ul className="tracks-container">
              <span></span>
              { userTracks }
            </ul>
            <aside>
            { user.bio }
            </aside>
          </section>

          <Modal
            isOpen={ this.state.modalOpen }
            onRequestClose={ this.closeModal }
            style={ userModalStyle }>

            { modalForm }

          </Modal>

        </div>
      );
    } else {
      return <h1>loading...</h1>;
    }
  }
}

export default UserShow;
