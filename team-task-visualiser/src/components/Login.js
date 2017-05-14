import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      hasAuthed: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props
      .login(this.username.value, this.password.value)
      .then(() => {
        this.setState({
          ...this.state,
          hasAuthed: true
        })
      })
      .catch(err => {
        this.setState({
          ...this.state,
          hasAuthed: false
        });
      });
  }

  render() {
    return this.state.hasAuthed
      ? <Redirect to={{ pathname: "/tasks" }} />
      : <form onSubmit={this.handleSubmit}>
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
        </form>;
  }
}

export default Login;
