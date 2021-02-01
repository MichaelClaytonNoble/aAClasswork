import React from 'react';
import {TodoListItem} from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form';

const TodoList = (store) =>{
  console.log(store);
  return (
    <div id="todo-list">
      <h1>To do List</h1>
      <ul>
        {store.todos.map( (todo, i) => (
        <TodoListItem todo={todo} key={i}/>
          ))}
      </ul>

      <div id="todo-form">
        <TodoForm store/>
      </div>
    
    </div>
  )
};


export default TodoList;
