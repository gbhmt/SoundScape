import React from 'react';


class UserShow extends React.Component {
  componentDidMount () {
    this.props.fetchSingleUser(this.props.params.id);
  }

  render () {
    const { currentUser, users, params } = this.props;
    this.user = users[params.id];

    if (this.user) {
      return <h1>{ this.user.email }</h1>;
    } else {
      return <h1>loading...</h1>;
    }
  }
}

export default UserShow;
