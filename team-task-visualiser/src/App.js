import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
        <TaskComponent />
      </div>
    );
  }
}

class TaskComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        "one", "two", "three"
      ]
    }
    this.addTask = this.addTask.bind(this);
  }

  addTask(task) {
    let newState = {
      ...this.state,
      tasks: [
        ...this.state.tasks,
        task
      ]
    };
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <Form
          addTask={this.addTask} />
        <TaskList
          tasks={this.state.tasks}  />
      </div>
    )
  }
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    this.props.addTask(this.state.value);
    this.setState({
      value: ''
    })
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <form
          onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

class TaskList extends Component {
  render() {
    return (
    <div>
      <ul>
        {this.props.tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>)
  }
}

export default App;
