import React from 'react';
import * as todoActions from "../../actions/todo_actions";
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return ({
    removeTodo: (todo) => dispatch(todoActions.removeTodo(todo))
  });
}

const TodoDetailContainer = connect(null, mapDispatchToProps)(TodoDetailView); 
export default TodoDetailContainer;