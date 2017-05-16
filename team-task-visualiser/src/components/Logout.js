import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Logout extends Component {
  componentWillMount() {
    this.props.logout();
  }

  render() {
    return <Redirect to={{ pathname: "/login" }} />;
  }
}

export default Logout;
