import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import SessionFormContainer from './users/session_form_container.jsx';
import TrackFormContainer from './tracks/track_form_container.js';
import { authModalStyle, userModalStyle } from '../util/modal_styles.js';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false, whichButton: "", modalType: "" };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal () {
    this.setState({ modalOpen: false, whichButton: "" });
    this.props.clearErrors();
  }

  openModal (button) {
    this.setState({ modalOpen: true, whichButton: button });
  }

  handleModal (action, button) {
    if (action === "upload") {
      this.setState({ modalType: action, modalOpen: true });
    } else {
      this.setState({ modalType: action, whichButton: button, modalOpen: true });
    }
  }

  render () {
    let buttons;
    let form;
    let modalStyle;
    let homePage;
    if (this.state.modalType === "upload") {
      form = <TrackFormContainer closeModal={ this.closeModal } />;
      modalStyle = userModalStyle;
    } else {
      form = <SessionFormContainer closeModal={ this.closeModal } initialFormType={ this.state.whichButton } />;
      modalStyle = authModalStyle;
    }
    const { currentUser } = this.props;
    if (currentUser) {
      homePage = "/tracks";
      buttons = (
        <div>
          <button className="upload" onClick={ () => this.handleModal("upload") }>Upload</button>
          <Link className="user-link" to={ `users/${currentUser.id}`}>
            <img className="user-badge" src={ currentUser.profile_picture_url }/>{ currentUser.email }</Link>
          <button className="logout" onClick={ this.props.logout }>Logout</button>
        </div>
      );
    } else {
      homePage = "/"
      buttons = (
        <div>
          <button className="login" onClick={ () => this.handleModal("session", "login") }>Sign In</button>
          <span>or</span>
          <button className="signup" onClick={ () => this.handleModal("session", "signup") }>Create Account</button>
          <button className="upload" onClick={ () =>this.handleModal("session", "login") }>Upload</button>
        </div>
      );
    }
    return (
      <div className="header">
        <div className="header-nav group">
          <Link to={ homePage }><img className="logo"src={ window.SoundScapeAssets.logo }/></Link>
          <div className="header-list group">
            { buttons }
          </div>
        </div>
        <Modal
          isOpen={ this.state.modalOpen }
          onRequestClose={ this.closeModal }
          style={ modalStyle }>

          { form }

        </Modal>

      </div>
    );
  }
}

export default Header;
