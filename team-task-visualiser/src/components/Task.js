import React, { Component } from "react";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      value: this.props.title
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(event) {
    this.setState({
      isEditing: true
    });
    event.preventDefault();
  }

  handleSubmit(event) {
    this.props.editTask(this.props.taskId, {
      title: this.state.value
    });
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
    return this.state.isEditing
      ? <li>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              autoFocus
              value={this.state.value}
              onChange={this.handleChange}
            />
          </form>
        </li>
      : <li onClick={this.handleClick}>{this.props.title}</li>;
  }
}

export default Task;
