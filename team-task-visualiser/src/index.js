import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import AppContainer from "./containers/AppContainer";
import configureStore from "./store";
import "./index.css";

const initialState = {
  tasks: []
};

ReactDOM.render(
  <Provider store={configureStore(initialState)}>
    <Router>
      <AppContainer />
    </Router>
  </Provider>,
  document.getElementById("root")
);
