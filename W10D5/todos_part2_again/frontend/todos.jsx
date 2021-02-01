import ReactDOM from 'react-dom';
import React from 'react';
import store from "./store/store"

document.addEventListener("DOMContentLoaded", ()=> {


  window.store = store;
  const root = document.getElementById('root'); 
  ReactDOM.render( <div>HIII</div>, root);

});