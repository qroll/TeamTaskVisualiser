import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import tasks from "./reducers/tasks";

const isBrowser = typeof window !== "undefined";
const composeEnhancers = isBrowser
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;
const enhancers =  composeEnhancers(applyMiddleware(thunk));

const configureStore = initialState => {
  return createStore(tasks, initialState, enhancers);
};

export default configureStore;
