import React from 'react';
import { userModalStyle } from '../util/modal_styles.js';
import UserForm from './user_form.jsx';
import Modal from 'react-modal';


class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  modalOpen: false };
    this.savePic = this.savePic.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
    if (user) {
      if (currentUser && (currentUser.id === user.id)) {
        uploadProfilePicture = <label htmlFor="update-image">Update image
          <input
          id="update-image"
          className="upload-profile"
          type="file"
          onChange={ (e) => this.savePic("profile_picture", e) }/></label>;
        editProfile = <button className="edit" onClick={ this.openModal }>Edit</button>;
        uploadBackground = <label htmlFor="upload-background">Update header background
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
      return (
        <div className="content-header group">
          <header style={ { backgroundImage } }
              className="user-header-container group">
            <span className="profile-picture">
            <img src={ user.profile_picture_url } />
            { uploadProfilePicture }
            </span>
            <div className="user-header">
              <h1 className={ hideDisplayName }>{ user.display_name }</h1><br />
              <h2 className={ hideName }>{ fullName }</h2><br />
              <h3 className={ hideCity }>{ location }</h3>
            </div>
            { uploadBackground }

          </header>

          <span className="group">
            { editProfile }
          </span>
          <section className="main-content">
            <aside>
            { user.bio }
            </aside>
          </section>

          <Modal
            isOpen={ this.state.modalOpen }
            onRequestClose={ this.closeModal }
            style={ userModalStyle }>

          <UserForm closeModal={ this.closeModal } updateUser={ this.props.updateUser } user={ this.props.user } />

          </Modal>

        </div>
      );
    } else {
      return <h1>loading...</h1>;
    }
  }
}

export default UserShow;
