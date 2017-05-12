import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.login(this.username.value, this.password.value);
    /*
    if (validate(this.username.value, this.password.value)) {
      this.setState({
        hasError: false
      });
    } else {
      this.setState({
        hasError: true
      });
    }
    */
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" ref={node => (this.username = node)} />
        </label>
        <label>
          Password:
          <input type="password" ref={node => (this.password = node)} />
        </label>
        <button type="submit">
          Login
        </button>
        {this.state.hasError && <span>Please check your login details.</span>}
      </form>
    );
  }
}

// just a simple validation function to test retrieval of input values
function validate(username, password) {
  let isValidUsername = username.trim().length > 0;
  let isValidPassword = password.length > 0;
  return isValidUsername && isValidPassword;
}

export default Login;
