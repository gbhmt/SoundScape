import React from 'react';
import { withRouter } from 'react-router';
import Modal from 'react-modal';
import { userModalStyle } from '../util/modal_styles.js';

class TrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.track ? this.props.track.title : "",
      description: this.props.track ? this.props.track.description : "",
      imageUrl: this.props.track ? this.props.track.image_url : "",
      imageFile: "",
      trackUrl: this.props.track ? this.props.track.track_file_url : "",
      trackFile: "",
      formModified: false,
      modalOpen: false,
    };
    this.editing = this.props.track ? true : false;
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (field, e) {
    this.setState({ [field]: e.currentTarget.value, formModified: true });
  }

  openModal () {
    this.setState({ modalOpen: true });
  }

  closeModal () {
    this.setState({ modalOpen: false });
  }

  updateFile (field, e) {
     if (typeof e.currentTarget.files[0] === "undefined") {
       return;
     }
     const file = e.currentTarget.files[0];
     const fileReader = new FileReader();
     fileReader.onloadend = () => {
       this.setState({ [`${field}File`]: file, [`${field}Url`]: fileReader.result,
          formModified: true });
     };
     if (file) {
       fileReader.readAsDataURL(file);
     }
   }

   handleSubmit () {
     const formData = new FormData();
     formData.append("track[title]", this.state.title);
     formData.append("track[description]", this.state.description);
     if (!this.editing) {
       formData.append("track[track_file]", this.state.trackFile);
     }
     if (this.state.trackFile) {
       formData.append("track[image]", this.state.imageFile);
     }
     if (this.editing) {
       this.props.updateTrack(this.props.track.id, formData).then(() => {
         this.closeModal();
        //  this.props.router.push(`/tracks/${this.props.track.id}`);
       });
     } else {
       this.props.createTrack(formData).then((track) => {
         this.closeModal();
        //  this.props.router.push(`/tracks${track.id}`);
       });
     }
   }

   render () {
     const allErrors = this.props.errors.map((error, idx) => {
       return <li className="form-error" key={ idx }>{ error }</li>;
     });
     return (
       <div>
         <h1 onClick={ this.openModal }>Click Me</h1>
       <Modal
         isOpen={ this.state.modalOpen }
         onRequestClose={ this.closeModal }
         style={ userModalStyle }>

         <div className="track-form-container">
           <div className="upload-inputs">
             <img className="track-image" src={ this.state.imageUrl }/>
             <label htmlFor="pic-button">Update image
             <input id="pic-button" type="file" onChange={ (e) => this.updateFile("image", e) }/></label>
             <label htmlFor="track-button">Choose a file to upload
             <input id="track-button" type="file" onChange={ (e) => this.updateFile("track", e) }/></label>
           </div>
           <div className="text-inputs">
             <label>Title</label>
             <input className="title-field" type="text"
               value={ this.state.title } onChange={ (e) => this.handleChange("title", e) }/>
             <label>Description</label>
             <textarea className="description-field" value={ this.state.description }
               onChange={ (e) => this.handleChange("description", e) }/>
            </div>
            <ul>
              { allErrors }
            </ul>
            <button onClick={ this.handleSubmit }>Submit</button>
          </div>
        </Modal>
        </div>
     );
   }

}

export default withRouter(TrackForm);
