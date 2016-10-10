import React from 'react';
import { withRouter } from 'react-router';
import Spinner from 'react-spinkit';



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
      submitDisabled: true,
      spinner: false
    };
    this.editing = this.props.track ? true : false;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.startSpinner = this.startSpinner.bind(this);
    this.stopSpinner = this.stopSpinner.bind(this);
  }

  handleChange (field, e) {
    this.setState({ [field]: e.currentTarget.value, submitDisabled: false });
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
     this.setState({ submitDisabled: true });
     this.startSpinner();
     const formData = new FormData();
     formData.append("track[title]", this.state.title);
     formData.append("track[description]", this.state.description);
     if (!this.editing) {
       formData.append("track[track_file]", this.state.trackFile);
     }
     if (this.state.imageFile) {
       formData.append("track[image]", this.state.imageFile);
     }
     if (this.editing) {
       this.props.updateTrack(this.props.track.id, formData).then(() => {
         this.props.closeModal();
      }, () => {
        this.stopSpinner();
        this.setState({ submitDisabled: false })
      });
     } else {
       this.props.createTrack(formData).then((track) => {
         this.props.closeModal();
         this.props.router.push(`/tracks/${track.id}`);
      }, () => {
        this.stopSpinner();
        this.setState({ submitDisabled: false })
      });
    }
   }

   startSpinner () {
     this.setState({ spinner: true });
   }

   stopSpinner () {
     this.setState({ spinner: false });
   }

   render () {
     const allErrors = this.props.errors.map((error, idx) => {
       return <li className="form-error" key={ idx }>{ error }</li>;
     });
     let heading;
     if (this.editing) {
       heading = "Edit track";
     } else {
       heading = "Add a new track";
     }
     let spinner;
     if (this.state.spinner) {
       spinner = <Spinner className="spinner" spinnerName="cube-grid" />;
     }
     let uploadButton;
     if (!this.editing) {
       uploadButton = <label htmlFor="track-button">Choose a file to upload
                  <input id="track-button" type="file"
                    onChange={ (e) => this.updateFile("track", e) }/></label>;
     }
     return (
         <div className="track-form-container group">
           <h1 className="track-form-heading">{ heading }</h1>
           <div className="upload-inputs">
             <img className="track-image" src={ this.state.imageUrl }/>
             <label htmlFor="track-image-button">
               <img src={ window.SoundScapeAssets.cameraIcon }/>Update image
             <input id="track-image-button" type="file" onChange={ (e) => this.updateFile("image", e) }/></label>
            { uploadButton }
           </div>
           <div className="text-inputs group">
             <label>Title</label>
             <input className="title-field" type="text"
               value={ this.state.title } onChange={ (e) => this.handleChange("title", e) }/>
             <label>Description</label>
             <textarea className="description-field" value={ this.state.description }
               onChange={ (e) => this.handleChange("description", e) }/>
             <div className="submit-and-errors">
               <ul className="track-errors">
                 { allErrors }
               </ul>
               <button disabled={ this.state.submitDisabled }
                 onClick={ this.handleSubmit }>Submit</button>
             </div>
            </div>
            { spinner }
          </div>
     );
   }

}

export default withRouter(TrackForm);
