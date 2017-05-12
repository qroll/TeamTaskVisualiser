import { connect } from "react-redux";

import { signup } from "../actions/user";
import SignUp from "../components/SignUp";

const mapStateToProps = (state, props) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (username, password) => dispatch(signup(username, password))
  };
};

const SignUpContainer = connect(mapStateToProps, mapDispatchToProps)(SignUp);

export default SignUpContainer;
