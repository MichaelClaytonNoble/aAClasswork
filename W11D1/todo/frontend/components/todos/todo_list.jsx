import React from 'react';
import {TodoListItem} from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form';

const TodoList = (props) =>{
  console.log(props);
  return (
    <div id="todo-list">
      <h1>To do List</h1>
      <ul>
        {props.todos.map( (todo, i) => (
        <TodoListItem todo={todo} key={i}/>
          ))}
      </ul>

      <div id="todo-form">
        <TodoForm addTodo={props.addTodo}/>
      </div>
    
    </div>
  )
};


export default TodoList;
