import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.signup(this.username.value, this.password.value);
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
          Sign Up
        </button>
      </form>
    );
  }
}

export default SignUp;
