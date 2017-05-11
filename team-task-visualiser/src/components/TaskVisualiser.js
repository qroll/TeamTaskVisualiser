import React, { Component } from "react";

import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

class TaskVisualiser extends Component {
  componentDidMount() {
    this.props.getTasks();
  }

  render() {
    const { tasks, addTask, editTask } = this.props;

    return (
      <div>
        <TaskForm addTask={addTask} />
        <TaskList editTask={editTask} tasks={tasks} />
      </div>
    );
  }
}

export default TaskVisualiser;
