import React from 'react';
import * as todoActions from "../../actions/todo_actions";
import * as stepActions from "../../actions/todo_actions";
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return ({
    removeTodo: (todo) => dispatch(todoActions.removeTodo(todo)),
    receiveSteps: (step) => dispatch(stepActions.receiveSteps(step))
  });
}

const TodoDetailContainer = connect(null, mapDispatchToProps)(TodoDetailView); 
export default TodoDetailContainer;