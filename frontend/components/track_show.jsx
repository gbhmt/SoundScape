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
    // if (track) {
    //   if (currentUser && currentUser.id === track.user_id) {
    //     uploadImage = <label htmlFor="update-image">Update image
    //       <input
    //       id="update-image"
    //       className="update-track-image"
    //       type="file"
    //       onChange={ (e) => this.savePic(e) }/></label>;
    //     editTrack = <button className="edit" onClick={ this.openModal }>Edit</button>;
    //   }
    //   return (
    //     <div className="track-show-header">
    //       <div className="sub-header">
    //         <img className="play-button" />
    //         <h2>{ this.props.track }</h2>
    //       </div>
    //
    //     </div>
    //   )
    // } else {
      return (
        <h1>asdf</h1>
      );
    // }
  }
}

export default TrackShow;
