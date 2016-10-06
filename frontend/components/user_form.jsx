import React from 'react';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: this.props.user.display_name,
      firstName: this.props.user.first_name,
      lastName: this.props.user.last_name,
      city: this.props.user.city,
      country: this.props.user.country,
      profileImageUrl: this.props.user.profile_picture_url,
      bio: this.props.user.bio,
      profileImageFile: null
    };
    this.updateFile = this.updateFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange (field, e) {
      this.setState({ [field]: e.currentTarget.value });
    }

    updateFile (e) {
     if (typeof e.currentTarget.files[0] === "undefined") {
       return;
     }
     const file = e.currentTarget.files[0];
     const fileReader = new FileReader();
     fileReader.onloadend = () => {
       this.setState({ profileImageFile: file, profileImageUrl: fileReader.result });
     };
     if (file) {
       fileReader.readAsDataURL(file);
     }
   }

   handleSubmit () {
     const formData = new FormData();
     formData.append("user[display_name]", this.state.displayName);
     formData.append("user[first_name]", this.state.firstName);
     formData.append("user[last_name]", this.state.lastName);
     formData.append("user[city]", this.state.city);
     formData.append("user[country]", this.state.country);
     formData.append("user[profile_picture]", this.state.profileImageFile);
     this.props.updateUser(this.props.user.id, formData).then(() => {
       this.props.closeModal();
     });
   }

   render () {
     return (
       <div className="user-form-container group">
         <img className="form-profile-pic" src={ this.state.profileImageUrl }/>
         <input className="pic-button" type="file" onChange={ this.updateFile }/>

         <label>Display name</label>
         <input className="display-name" type="text"
           value={ this.state.displayName } onChange={ (e) => this.handleChange("displayName", e) }/>

         <label>First name</label>
         <input className="shorter-input" type="text"
           value={ this.state.firstName } onChange={ (e) => this.handleChange("firstName", e) } />

         <label>Last name</label>
         <input className="shorter-input" type="text"
           value={ this.state.firstName } onChange={ (e) => this.handleChange("lastName", e) } />

         <label>City</label>
         <input className="shorter-input" type="text"
           value={ this.state.firstName } onChange={ (e) => this.handleChange("city", e) } />

         <label>Country</label>
         <input className="shorter-input" type="text"
           value={ this.state.firstName } onChange={ (e) => this.handleChange("country", e) } />

         <label>Bio</label>
         <textarea className="bio" value={ this.state.bio }
           onChange={ (e) => this.handleChange("bio", e) }
           placeholder="Tell the world a little bit about yourself. The shorter the better.">
         </textarea>
         <button className="save-button" onClick={ this.handleSubmit }>
           Save Changes</button>
       </div>
     );
   }
}

export default UserForm;
