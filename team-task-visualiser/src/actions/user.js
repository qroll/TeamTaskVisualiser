import axios from "axios";

let API_URL = "http://localhost:9000";

let instance = axios.create({
  baseURL: API_URL,
  timeout: 3000,
  withCredentials: true
});

export const signup = (username, password) => {
  return dispatch => {
    axios
      .post(API_URL + "/signup", { username, password })
      .then(res => {
        console.log(res.data);
        dispatch({
          type: "SIGNUP_USER",
          username
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const login = (username, password) => {
  return dispatch =>
    new Promise(function(resolve, reject) {
      instance
        .post(API_URL + "/login", { username, password })
        .then(res => {
          console.log(res.data);
          dispatch({
            type: "LOGIN_USER",
            username
          });
          resolve();
        })
        .catch(err => {
          console.log(err);
          reject();
        });
    });
};

export const logout = () => {
  return dispatch => {
    axios
      .post(API_URL + "/logout")
      .then(res => {
        console.log(res.data);
        dispatch({
          type: "LOGOUT_USER"
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
