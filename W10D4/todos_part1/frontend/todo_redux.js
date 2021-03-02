import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import addTodos from './actions/todos_action';
import {removeTodo, addTodo} from './actions/todo_action';
import {addStep, addSteps, removeStep} from './actions/step_action';
import App from './components/app.jsx'

document.addEventListener("DOMContentLoaded", ()=>{
<<<<<<< Updated upstream
=======
  windowStuff();
  const store = configureStore();
  window.store = store;
>>>>>>> Stashed changes

  const content = document.getElementById("content");
  ReactDOM.render(<App/>, content);
  console.log("to do list");
  window.store = configureStore();
  window.addTodos = addTodos;
  window.addTodo = addTodo;
  window.removeTodo = removeTodo;
  window.addStep = addStep;
  window.addSteps = addSteps;
  window.removeStep = removeStep;
  

});

