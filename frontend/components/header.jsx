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
        <li>
          <Link to={ `users/${currentUser.id}`}>{ currentUser.username }</Link>
          <button onClick={ this.logout }>Logout</button>
        </li>
      );
    } else {
      buttons = (
        <div>
        <button onClick={ () => this.openModal("signup") }>Sign Up</button>
          <span>or</span>
        <button onClick={ () => this.openModal("login") }>Log In</button>

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
        <Link to={ "/" }><img src={ window.SoundScapeAssets.logo }/></Link>
        <span>Search bar goes here</span>
        <ul>
          { buttons }
        </ul>
      </div>
    );
  }
}

export default Header;
