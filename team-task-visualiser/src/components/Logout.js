import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import { logout } from "../actions/user";

class Logout extends Component {
  componentWillMount() {
    const { store } = this.context;
    store.dispatch(logout);
  }

  render() {
    return <Redirect to={{ pathname: "/login" }} />;
  }
}

Logout.contextTypes  = {
    store: PropTypes.object
}

export default Logout;
