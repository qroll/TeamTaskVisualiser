import axios from "axios";

let API_URL = "http://localhost:9000";

export const addTask = task => {
  return dispatch => {
    axios
      .post(API_URL + "/task", {
        task
      })
      .then(res => {
        console.log(res);
        dispatch({
          type: "ADD_TASK",
          task: task
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
    taskId: taskId,
    task: task
  };
};
