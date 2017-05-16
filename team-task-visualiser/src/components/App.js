import React from "react";
import { Route } from "react-router-dom";

import NavHeader from "../components/NavHeader";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import Logout from "../components/Logout";

import TaskVisualiserContainer from "../containers/TaskVisualiserContainer";

const App = ({ user, signup, login, logout }) => {
  return (
    <div>
      <NavHeader user={user} />

      <Route path="/tasks" component={TaskVisualiserContainer} />
      <Route path="/login" render={() => <Login login={login} />} />
      <Route path="/logout" render={() => <Logout logout={logout} />} />
      <Route path="/signup" render={() => <SignUp signup={signup} />} />
    </div>
  );
};

export default App;
