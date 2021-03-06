import React from 'react';
import {connect} from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import TasksPage from './components/TasksPage';
import {createTask, editTask, removeTask} from "./actions";

function App(props) {

  const onStatusChange = (id, status) => {
    props.dispatch(editTask(id, {status}))
  };

  const onCreateTask = ({title, description}) => {
    props.dispatch(createTask({title, description}))
  };

  const onRemoveTask = (id) => {
    props.dispatch(removeTask(id));
  };
  
  return (
    <>
      <TasksPage tasks={props.tasks} onStatusChange={onStatusChange} onCreateTask={onCreateTask} onRemoveTask={onRemoveTask} />
    </>
  );
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps)(App);
