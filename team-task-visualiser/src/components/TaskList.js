import React from "react";

import Task from "./Task";

const TaskList = ({ tasks, editTask }) => {
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <Task key={index} editTask={editTask} taskId={task._id} title={task.title} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
