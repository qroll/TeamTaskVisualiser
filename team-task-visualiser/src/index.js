import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import configureStore from './store';
import './index.css';

const initialState = {
  tasks: []
}

ReactDOM.render(
  <Provider store={configureStore(initialState)}>
      <App />
  </Provider>,
  document.getElementById('root')
);
