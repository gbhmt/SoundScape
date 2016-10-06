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
      profileImageFile: null,
      formModified: false
    };
    this.updateFile = this.updateFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange (field, e) {
      this.setState({ [field]: e.currentTarget.value, formModified: true });
    }

    updateFile (e) {
     if (typeof e.currentTarget.files[0] === "undefined") {
       return;
     }
     const file = e.currentTarget.files[0];
     const fileReader = new FileReader();
     fileReader.onloadend = () => {
       this.setState({ profileImageFile: file, profileImageUrl: fileReader.result,
          formModified: true });
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
     formData.append("user[bio]", this.state.bio);
     if (this.state.profileImageFile) {
       formData.append("user[profile_picture]", this.state.profileImageFile);
     }
     this.props.updateUser(this.props.user.id, formData).then(() => {
       this.props.closeModal();
     });
   }

   render () {
     return (
       <div>
         <h1 className="user-form-heading">Edit your Profile</h1>
         <div className="user-form-container group">
           <img className="form-profile-pic" src={ this.state.profileImageUrl }/>
           <label htmlFor="pic-button">Update image
           <input id="pic-button" className="pic-button" type="file" onChange={ this.updateFile }/></label>
           <div className="fields group">
           <label>Display name</label>
             <input className="display-name" type="text"
               value={ this.state.displayName } onChange={ (e) => this.handleChange("displayName", e) }/>
             <div className="first-and-last-name group">
               <span className="firstname">
                 <label>First name</label>
                 <input className="shorter-input" type="text"
                   value={ this.state.firstName } onChange={ (e) => this.handleChange("firstName", e) } />
               </span>
               <span className="lastname">
                 <label>Last name</label>
                 <input className="shorter-input" type="text"
                   value={ this.state.lastName } onChange={ (e) => this.handleChange("lastName", e) } />
               </span>
             </div>
             <div className="city-and-country group">
               <span className="city">
                 <label>City</label>
                 <input className="shorter-input" type="text"
                   value={ this.state.city } onChange={ (e) => this.handleChange("city", e) } />
               </span>
               <span className="country">
                 <label>Country</label>
                 <input className="shorter-input" type="text"
                   value={ this.state.country } onChange={ (e) => this.handleChange("country", e) } />
               </span>
             </div>
             <label>Bio</label>
             <textarea className="bio" value={ this.state.bio }
               onChange={ (e) => this.handleChange("bio", e) }
               placeholder="Tell the world a little bit about yourself. The shorter the better.">
             </textarea>
           </div>
         </div>
         <button disabled={ !this.state.formModified }
           className="save-button" onClick={ this.handleSubmit }>
           Save Changes</button>
       </div>
     );
   }
}

export default UserForm;
