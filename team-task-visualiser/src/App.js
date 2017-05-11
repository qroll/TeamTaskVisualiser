import React, { Component } from "react";
import axios from "axios";

import logo from "./logo.svg";
import "./App.css";

import TaskVisualiserContainer from "./containers/TaskVisualiserContainer";

class App extends Component {
  componentDidMount() {
    axios
      .get("http://localhost:9000/task")
      .then(res => {
        console.log(res.data);
        this.context.store.dispatch({
          type: "GET_TASKS",
          tasks: res.data.map(obj => obj.task)
        })
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TaskVisualiserContainer />
      </div>
    );
  }
}

App.contextTypes = {
  store: React.PropTypes.object
}

export default App;
