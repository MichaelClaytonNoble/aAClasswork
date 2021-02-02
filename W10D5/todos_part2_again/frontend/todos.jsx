import ReactDOM from 'react-dom';
import React from 'react';
import store from "./store/store";
import Root from "./components/root";


document.addEventListener("DOMContentLoaded", ()=> {


  window.store = store;

  const root = document.getElementById('root'); 

  ReactDOM.render( <Root store={store}/>, root);

});