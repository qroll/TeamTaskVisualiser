import { connect } from "react-redux";

import { login } from "../actions/user";
import Login from "../components/Login";

const mapStateToProps = (state, props) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => dispatch(login(username, password))
  };
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
