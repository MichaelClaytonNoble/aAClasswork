
import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';

function Root(){
  
  return (<div></div>);
}

document.addEventListener('DOMContentLoaded', ()=> {

  const reactRoot = document.getElementById('react-root');

  ReactDOM.render(<div>Hello</div>, reactRoot);


});

