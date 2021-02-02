//holds all of the top-level concerns / components of the app
//top-level concern is a feature of the app that functions on its own and is not nested under any other features. 

import React from 'react';
import TodoListContainer from './todos/todo_list_container';
const App = ()=>{
  return (
    <TodoListContainer />
  );
}

export default App; 