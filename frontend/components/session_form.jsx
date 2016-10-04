import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit (e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
    this.state = { username: "", password: "" };

  }

  handleChange (field, e) {
    this.setState({ [field]: e.currentTarget.value });
  }

  componentDidUpdate (){
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  render () {
    let header;
    let path;
    let linkText;
    if (this.props.formType === "login") {
      header = <h1>Log In</h1>;
      path = "signup";
      linkText = "Sign Up";
    } else {
      header = <h1>Sign Up</h1>;
      path = "login";
      linkText = "Log In";
    }
    const allErrors = this.props.errors.map((error, idx) => {
      return <li key={ idx }>{ error }</li>;
    });
    return (
      <div>
        { header }
        <ul>
          { allErrors }
        </ul>
        <form onSubmit={ this.handleSubmit}>
          <label>Username
            <input value={ this.state.username } onChange={ (e) => this.handleChange("username", e) }/>
          </label><br />
          <label>Password
            <input type="password" value={ this.state.password } onChange={ (e) => this.handleChange("password", e) }/>
          </label><br />
          <button>Submit</button><br />
          <Link to={ path }>{ linkText }</Link>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
