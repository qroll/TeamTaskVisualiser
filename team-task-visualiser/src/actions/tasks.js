export const addTask = task => {
  return {
    type: "ADD_TASK",
    task: task
  };
};

export const editTask = (taskId, task) => {
  return {
    type: "EDIT_TASK",
    taskId: taskId,
    task: task
  };
};
