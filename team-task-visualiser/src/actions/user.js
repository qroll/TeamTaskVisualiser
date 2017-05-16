import { callApi } from "../util/callApi";

export const signup = (username, password) => {
  return dispatch => {
    callApi("/signup", "post", { username, password })
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
    callApi("/login", "post", { username, password })
      .then(res => {
        console.log(res.data);
        dispatch({
          type: "LOGIN_USER",
          username
        });
      })
      .catch(err => {
        console.log(err);
      });
};

export const logout = () => {
  return dispatch => {
    callApi("/logout", "post")
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
