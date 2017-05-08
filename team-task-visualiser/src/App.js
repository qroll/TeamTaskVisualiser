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
    this.editTask = this.editTask.bind(this);
  }

  addTask(task) {
    this.setState({
      tasks: [
        ...this.state.tasks,
        task
      ]
    });
  }

  editTask(taskId, task) {
    this.setState({
      tasks: [
        ...this.state.tasks.slice(0, taskId),
        task,
        ...this.state.tasks.slice(taskId + 1)
      ]
    });
  }

  render() {
    return (
      <div>
        <Form
          addTask={this.addTask} />
        <TaskList
          editTask={this.editTask}
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
          <Task key={index} 
            editTask={this.props.editTask} 
            taskId={index} 
            task={task} />
        ))}
      </ul>
    </div>
  )}
}

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      value: this.props.task
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(event) {
    this.setState({
      isEditing: true
    })
    event.preventDefault();
  }

  handleSubmit(event) {
    this.props.editTask(this.props.taskId, this.state.value);
    this.setState({
      isEditing: false
    });
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    if (this.state.isEditing) {
      return <li>
        <form onSubmit={this.handleSubmit} >
          <input
            type="text"
            autoFocus
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
      </li>;
    }
    return <li onClick={this.handleClick}>{this.props.task}</li>;
  }

}

export default App;
