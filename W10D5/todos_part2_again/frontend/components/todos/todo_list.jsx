import React from 'react';
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form'

//TodoList component will display the items in the todo list 

const TodoList = ({todos, receiveTodo})=>{

  return (
    <div id="todo-list">

      <ul> 
        {
          todos.map( (todo, i)=> {
            return <TodoListItem todo={todo} key={i}/>
          })
        }
      </ul>

      <TodoForm receiveTodo={receiveTodo} />
    </div>

  );
}

export default TodoList; 