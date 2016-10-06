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
    const { currentUser, user, params } = this.props;
    let uploadProfilePicture;
    let editProfile;
    let uploadBackground;
    if (user) {
      if (currentUser && (currentUser.id === user.id)) {
        uploadProfilePicture = <input
          className="upload-profile"
          type="file"
          onChange={ (e) => this.savePic("profile_picture", e) }/>;
        editProfile = <button className="edit" onClick={ this.openModal }>Edit</button>;
        uploadBackground = <input
          className="upload-background"
          type="file"
          onChange={ (e) => this.savePic("header_background", e) }
          />;
      }
      const fullName = user.first_name + " " + user.last_name;
      const location = user.city + ", " + user.country;
      return (
        <div>
          <header className="user-header group">
            <span className="profile-picture">
              <img src={ user.profile_picture_url } />
              { uploadProfilePicture }
            </span>
            <h1 className="display-name">{ user.display_name }</h1>
            <h2 className="full-name">{ fullName }</h2>
            <h3 className="location">{ location }</h3>
            { uploadBackground }
          </header>
          <aside className="sub-header">
            { editProfile }
            { user.bio }
          </aside>

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
