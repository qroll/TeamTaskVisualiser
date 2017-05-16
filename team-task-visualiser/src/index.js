import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavHeaderContainer from "./containers/NavHeaderContainer";
import TaskVisualiserContainer from "./containers/TaskVisualiserContainer";
import LoginContainer from "./containers/LoginContainer";
import Logout from "./components/Logout";
import SignUpContainer from "./containers/SignUpContainer";
import configureStore from "./store";
import "./index.css";

const initialState = {
  tasks: []
};

ReactDOM.render(
  <Provider store={configureStore(initialState)}>
    <Router>
      <div>
        <NavHeaderContainer />

        <Route path="/tasks" component={TaskVisualiserContainer} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/logout" component={Logout} />
        <Route path="/signup" component={SignUpContainer} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
