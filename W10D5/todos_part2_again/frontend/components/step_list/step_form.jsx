import React from 'react';
import uniqueId from '../../util/unique_id';

class StepForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      id: uniqueId,
      title: '',
      body: '',
      done: false,
      todo_id: -1
    }
    this.handleSubmit=this.handleSubmit.bind(this); 
  }

  handleSubmit(e){
    e.preventDefault();
  }

  render(){

    return (

      <form onSubmit={this.handleSubmit}></form>
    )
  }
}