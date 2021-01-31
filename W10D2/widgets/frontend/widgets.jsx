
import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs'; 
import Weather from './weather'


const tabInfo = [{ title: "Tab 1", content: "First" }, { title: "Tab 2", content: "Second" }, { title: "Tab 3", content: "Third" }];

function Root(){

  return (<div>
    <Clock />
    <Weather />
    <Tabs tabInfo={tabInfo} />
  </div>);
}

document.addEventListener('DOMContentLoaded', ()=> {

  const reactRoot = document.getElementById('react-root');

  ReactDOM.render(<Root />, reactRoot);
});


