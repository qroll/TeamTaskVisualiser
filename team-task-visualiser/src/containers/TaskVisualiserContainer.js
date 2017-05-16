import { connect } from "react-redux";

import { getTasks, addTask, editTask } from "../actions/tasks";
import TaskVisualiser from "../components/TaskVisualiser";

const mapStateToProps = (state, props) => {
  return {
    tasks: state.tasks,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTasks: () => dispatch(getTasks()),
    addTask: task => dispatch(addTask(task)),
    editTask: (taskId, task) => dispatch(editTask(taskId, task))
  };
};

const TaskVisualiserContainer = connect(mapStateToProps, mapDispatchToProps)(
  TaskVisualiser
);

export default TaskVisualiserContainer;
