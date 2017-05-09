import React from "react";

import Task from "./Task";

const TaskList = ({ tasks, editTask }) => {
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <Task key={index} editTask={editTask} taskId={index} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
