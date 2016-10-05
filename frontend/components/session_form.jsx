import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", formType: this.props.initialFormType };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.swapForms = this.swapForms.bind(this);
  }


  handleSubmit (e) {
    e.preventDefault();
    const user = { username: this.state.username, password: this.state.password };
    if (this.state.formType === "login") {
      this.props.login(user);
    } else {
      this.props.signup(user);
    }

    this.setState({ username: "", password: ""});

  }

  handleChange (field, e) {
    this.setState({ [field]: e.currentTarget.value });
  }

  swapForms (e) {
    e.preventDefault();
    this.props.clearErrors();
    if (this.state.formType === "login") {
      this.setState({ formType: "signup" });
    } else {
      this.setState({ formType: "login"});
    }
  }


  render () {
    let header;
    let linkText;
    let beforeLinkText;
    if (this.state.formType === "login") {
      header = <h1 className="form-label">Log In</h1>;
      beforeLinkText = "Don't have an account?";
      linkText = "Sign Up";
    } else {
      header = <h1 className="form-label">Sign Up</h1>;
      beforeLinkText = "Already have an account?";
      linkText = "Log In";
    }
    const allErrors = this.props.errors.map((error, idx) => {
      return <li key={ idx }>{ error }</li>;
    });
    return (
      <div className='form-container'>
        { header }
        <ul>
          { allErrors }
        </ul>
        <form onSubmit={ this.handleSubmit }>
          <label>Username</label>
            <input value={ this.state.username } onChange={ (e) => this.handleChange("username", e) }/>
          <br />
          <label>Password</label>
            <input type="password" value={ this.state.password } onChange={ (e) => this.handleChange("password", e) }/>
          <br />
          <button className="submit">Continue</button><br />
          <span className="before-link">{ beforeLinkText }</span>
          <button className="swapForms" onClick={ this.swapForms }>{ linkText }</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
