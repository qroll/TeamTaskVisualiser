import React from "react";

import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const TaskVisualiser = ({ tasks, addTask, editTask }) => {
  return (
    <div>
      <TaskForm addTask={addTask} />
      <TaskList editTask={editTask} tasks={tasks} />
    </div>
  );
};

export default TaskVisualiser;
