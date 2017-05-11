import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import App from './App';
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import configureStore from './store';
import './index.css';

const initialState = {
  tasks: []
}

ReactDOM.render(
  <Provider store={configureStore(initialState)}>
    <Router>
      <div>
        <ul>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/tasks">Tasks</Link></li>
        </ul>

        <hr/>

        <Route path="/tasks" component={App}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
