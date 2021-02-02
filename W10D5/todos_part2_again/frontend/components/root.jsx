import React from 'react';
//provider gives all of the components the potential to access the Redux store 
//allowing them to read the application state and dispatch actions

import { Provider } from "react-redux";
import App from "./app"

//destructured 
// const Root = ({store}) => {
  // <Provider store={store}> 
  
const Root = (props) => {
  return (
    <Provider store={props.store}> 
      <App /> 
    </Provider>
  );
};



export default Root; 