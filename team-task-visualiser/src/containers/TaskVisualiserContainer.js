import { connect } from "react-redux";

import { addTask, editTask } from "../actions/tasks";
import TaskVisualiser from "../components/TaskVisualiser";

const mapStateToProps = (state, props) => {
  return {
    tasks: state.tasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTask: task => dispatch(addTask(task)),
    editTask: (taskId, task) => dispatch(editTask(taskId, task))
  };
};

const TaskVisualiserContainer = connect(mapStateToProps, mapDispatchToProps)(
  TaskVisualiser
);

export default TaskVisualiserContainer;
