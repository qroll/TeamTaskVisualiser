import axios from "axios";

let API_URL = "http://localhost:9000";

let instance = axios.create({
  baseURL: API_URL,
  timeout: 3000,
  withCredentials: true
});

export const getTasks = () => {
  return dispatch => {
    axios
      .get(API_URL + "/task")
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
    instance
      .post(API_URL + "/task", { task })
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
