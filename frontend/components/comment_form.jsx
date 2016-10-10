import React from 'react';
import Modal from 'react-modal';
import SessionFormContainer from './session_form_container.jsx';
import { authModalStyle } from '../util/modal_styles.js';


class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "", modalOpen: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.activateForm = this.activateForm.bind(this);
    this.deactivateForm = this.deactivateForm.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    if (this.state.body === "") {
      return;
    }
    if (this.props.currentUser) {
      const comment = {
        body: this.state.body,
        commentable_id: this.props.track.id,
        commentable_type: this.props.type
      };
      this.props.createComment(comment).then(() => {
        this.setState({ body: "" });
      });
    } else {
      this.openModal();
    }
  }

  handleChange (e) {
    this.setState({ body: e.currentTarget.value });
  }

  activateForm () {
    $(".comment-form form").addClass("active");
  }

  deactivateForm () {
    $(".comment-form form").removeClass("active");
  }

  openModal () {
    this.setState({ modalOpen: true });
  }

  closeModal () {
    this.setState({ modalOpen: false });
  }

  render () {
    let badgeUrl;
    if (this.props.currentUser) {
      badgeUrl = this.props.currentUser.profile_picture_url;
    } else {
      badgeUrl = window.SoundScapeAssets.gradientIcon;
    }
    return (
      <div className="comment-form group">
        <img className="new-comment-badge"
          src={ badgeUrl }/>
        <form onSubmit={ this.handleSubmit }>
          <input onChange={ this.handleChange } value={this.state.body}
            className="comment-input" type="text" onFocus={ this.activateForm }
            onBlur={ this.deactivateForm } placeholder="Write a comment" />
        </form>

        <Modal
          isOpen={ this.state.modalOpen }
          onRequestClose={ this.closeModal }
          style={ authModalStyle }>

          <SessionFormContainer closeModal={ this.closeModal } initialFormType="login"/>

        </Modal>
      </div>
    );
  }
}


export default CommentForm;
