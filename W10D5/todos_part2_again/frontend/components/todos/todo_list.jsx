import React from 'react';
import TodoListItem from '../todo_list/todo_list_item';
//TodoList component will display the items in the todo list 

const TodoList = ({todos})=>{

  return (
    <ul> 
      {
        todos.map( (todo, i)=> {
          return <TodoListItem todo={todo} key={i}/>
        })
      }
    </ul>

  );
}

export default TodoList; 