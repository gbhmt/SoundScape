import React from 'react';


class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
    this.savePic = this.savePic.bind(this);
  }
  componentDidMount () {
    this.props.fetchSingleUser(this.props.params.id);
  }

  savePic (type, e) {
    const formData = new FormData();
    formData.append(`user[${type}]`, e.currentTarget.files[0]);
    this.props.updateUser(this.props.user.id, formData);
  }
  // updateFile (type, e) {
  //   const file = e.currentTarget.files[0];
  //   const fileReader = new FileReader();
  //   fileReader.onloadend = () => {
  //     this.setState({ [`${type}File`]: file, [`${type}Url`]: fileReader.result });
  //   };
  //   if (file) {
  //     fileReader.readAsDataUrl(file);
  //   }
  // }
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
          </aside>
        </div>
      );
    } else {
      return <h1>loading...</h1>;
    }
  }
}

export default UserShow;
