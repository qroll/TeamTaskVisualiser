import React, { Component } from "react";

import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

import './TaskVisualiser.css';

class TaskVisualiser extends Component {
  componentDidMount() {
    this.props.getTasks();
  }

  render() {
    const { tasks, user, addTask, editTask } = this.props;

    return user.isAuthed
    ? (
      <div className="TaskVisualiser">
        <TaskForm addTask={addTask} />
        <TaskList editTask={editTask} tasks={tasks} />
      </div>
    )
    : null;
  }
}

export default TaskVisualiser;
