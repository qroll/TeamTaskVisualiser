import { callApi } from "../util/callApi";

export const getTasks = () => {
  return dispatch => {
    callApi("/task", "get")
      .then(res => {
        console.log(res.data);
        dispatch({
          type: "GET_TASKS",
          tasks: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const addTask = task => {
  return dispatch => {
    callApi("/task", "post", { task })
      .then(res => {
        console.log(res.data);
        dispatch({
          type: "ADD_TASK",
          task: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const editTask = (taskId, task) => {
  return {
    type: "EDIT_TASK",
    taskId,
    task
  };
};
