const tasks = (state = [], action) => {
  switch (action.type) {
    case "GET_TASKS":
      return action.tasks;
    case "ADD_TASK":
      return [...state, action.task];
    case "EDIT_TASK":
      var index = state.findIndex(task => task._id === action.taskId);
      return index < 0
        ? state
        : [
            ...state.slice(0, index),
            action.task,
            ...state.slice(index + 1)
          ];
    default:
      return state;
  }
};

export default tasks;
