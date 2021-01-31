
import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs'; 
import Weather from './weather';
import Autocomplete from './autocomplete';

const tabInfo = [{ title: "Tab 1", content: "First" }, { title: "Tab 2", content: "Second" }, { title: "Tab 3", content: "Third" }];
const autoNames = ["Hasret", "Harpreet", "Kiara", "Mako", "Trudy"];
function Root(){

  return (<div>
    <h1>Clock</h1>
    <Clock />
    <h1>Weather</h1>
    <Weather />
    <div className="interactive" > 
      <Tabs tabInfo={tabInfo} />
      <Autocomplete names={autoNames}/>
    </div>
  </div>);
}

document.addEventListener('DOMContentLoaded', ()=> {

  const reactRoot = document.getElementById('react-root');

  ReactDOM.render(<Root />, reactRoot);
});


