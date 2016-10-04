import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import SessionFormContainer from './session_form_container.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false, whichButton: "" };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.logout = this.logout.bind(this);
  }

  closeModal () {
    this.setState({ modalOpen: false, whichButton: "" });
  }

  openModal (button) {
    this.setState({ modalOpen: true, whichButton: button });
  }

  logout () {
    this.closeModal();
    this.props.logout();
  }

  render () {
    let buttons;
    const { currentUser } = this.props;
    if (currentUser) {
      buttons = (
        <div>
          <Link to={ `users/${currentUser.id}`}>{ currentUser.username }</Link>
          <button onClick={ this.logout }>Logout</button>
        </div>
      );
    } else {
      buttons = (
        <div>
          <button className="login" onClick={ () => this.openModal("login") }>Sign In</button>
          <span>or</span>
          <button className="signup" onClick={ () => this.openModal("signup") }>Create an Account</button>
        <Modal
          isOpen={ this.state.modalOpen }
          onRequestClose={ this.closeModal }
          style={ this.props.style }>

          <SessionFormContainer initialFormType={ this.state.whichButton } />

        </Modal>

        </div>
      );
    }
    return (
      <div className="header">
        <div className="header-nav group">
          <Link to={ "/" }><img className="logo"src={ window.SoundScapeAssets.logo }/></Link>
          <span className="search">Search bar goes here</span>
          <div className="header-list group">
            { buttons }
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
