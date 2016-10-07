import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", formType: this.props.initialFormType };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.swapForms = this.swapForms.bind(this);
  }


  handleSubmit (e) {
    e.preventDefault();
    const user = { email: this.state.email, password: this.state.password };
    if (this.state.formType === "login") {
      this.props.login(user).then(() => {
        this.setState({ email: "", password: ""});
        this.props.closeModal();
      });
    } else {
      this.props.signup(user).then(() => {
        this.setState({ email: "", password: ""});
        this.props.closeModal();
      });
    }
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
      return <li className="form-error" key={ idx }>{ error }</li>;
    });
    return (
      <div className='form-container'>
        { header }
        <form onSubmit={ this.handleSubmit }>
          <label>Email</label>
            <input value={ this.state.email } onChange={ (e) => this.handleChange("email", e) }/>
          <br />
          <label>Password</label>
            <input type="password" value={ this.state.password } onChange={ (e) => this.handleChange("password", e) }/>
          <br />
            <ul>
              { allErrors }
            </ul>
          <button className="submit">Continue</button><br />
          <span className="before-link">{ beforeLinkText }</span>
          <button className="swapForms" onClick={ this.swapForms }>{ linkText }</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
