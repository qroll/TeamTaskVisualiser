import { combineReducers } from "redux";

import tasks from "./tasks";
import user from "./user";

const RootReducer = combineReducers({ tasks, user });

export default RootReducer;
