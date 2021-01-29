import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import addTodos from './actions/todos_action';
import {removeTodo, addTodo} from './actions/todo_action';
import {addStep, removeStep} from './actions/step_action';

document.addEventListener("DOMContentLoaded", ()=>{

  const content = document.getElementById("content");
  ReactDOM.render(<div>HELLO</div>, content);
  console.log("to do list");
  window.store = configureStore();
  window.addTodos = addTodos;
  window.addTodo = addTodo;
  window.removeTodo = removeTodo;
  window.addStep = addStep;
  window.removeStep = removeStep;
  

});


