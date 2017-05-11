const tasks = (state = { tasks: [] }, action) => {
  switch (action.type) {
    case "GET_TASKS":
      return {
        ...state,
        tasks: action.tasks
      }
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.task]
      };
    case "EDIT_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks.slice(0, action.taskId),
          action.task,
          ...state.tasks.slice(action.taskId + 1)
        ]
      };
    default:
      return state;
  }
};

export default tasks;
