import React from "react";

import Task from "./Task";
import Reactable from "./Reactable";

const TaskList = ({ tasks, editTask }) => {
  return (
    <div>
      <Reactable tasks={tasks} />
    </div>
  );
};

export default TaskList;
