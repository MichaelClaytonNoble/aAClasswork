//TodoListContainer will allow the presentational component to remain simple and 
// lightweight 
//to accomplish this we will 
// map the application state and the store's dispatch function to a 
//set of props that get passed to the presentational component 

import {connect } from 'react-redux'; 
//import the action creator 
//import the presentational component to connect 
import TodoList from './todo_list';
import * as todoActions from '../../actions/todo_actions';

//map slice of state to props object 
//here we are accepting state as an argument 
//returning a prop with slice of state 
const mapStateToProps = (state) =>{
  return {
    todos: state.allTodos
  };
};

//create an action dispatcher 
//accepts a dispatch 
const mapDispatchToProps = (dispatch) => {

  return {
    receiveTodo: (todo)=>dispatch(todoActions.receiveTodo(todo))
  }
};

//set our container = to connect method
const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

//export 
export default TodoListContainer; 