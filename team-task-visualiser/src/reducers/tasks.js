const tasks = (state = { tasks: [] }, action) => {
  switch (action.type) {
    case "GET_TASKS":
      return {
        ...state,
        tasks: action.tasks
      };
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.task]
      };
    case "EDIT_TASK":
      var index = state.tasks.findIndex(task => task._id === action.taskId);
      return index < 0
        ? state
        : {
            ...state,
            tasks: [
              ...state.tasks.slice(0, index),
              action.task,
              ...state.tasks.slice(index + 1)
            ]
          };
    default:
      return state;
  }
};

export default tasks;
