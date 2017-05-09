import React, { Component } from "react";

import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

class TaskVisualiser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ["one", "two", "three"]
    };
    this.addTask = this.addTask.bind(this);
    this.editTask = this.editTask.bind(this);
  }

  addTask(task) {
    this.setState({
      tasks: [...this.state.tasks, task]
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
        <TaskForm addTask={this.addTask} />
        <TaskList editTask={this.editTask} tasks={this.state.tasks} />
      </div>
    );
  }
}

export default TaskVisualiser;
