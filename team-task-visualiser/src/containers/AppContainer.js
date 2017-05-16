import { connect } from "react-redux";
import { withRouter } from "react-router";
import { signup, login, logout } from "../actions/user";
import App from "../components/App";

const mapStateToProps = (state, props) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (username, password) => dispatch(signup(username, password)),
    login: (username, password) => dispatch(login(username, password)),
    logout: () => dispatch(logout())
  };
};

const AppContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

export default AppContainer;
