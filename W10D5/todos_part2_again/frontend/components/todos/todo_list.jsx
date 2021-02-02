import React from 'react';
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form'

//TodoList component will display the items in the todo list 

const TodoList = (props)=>{

  return (
    <div id="todo-list">

      <ul> 
        {
          props.todos.map( (todo, i)=> {
            return (
            <TodoListItem todo={todo} key={i} removeTodo={props.removeTodo} receiveTodo={props.receiveTodo}/>
            )
          })
        }
      </ul>

      <TodoForm receiveTodo={props.receiveTodo} />
    </div>

  );
}

export default TodoList; 