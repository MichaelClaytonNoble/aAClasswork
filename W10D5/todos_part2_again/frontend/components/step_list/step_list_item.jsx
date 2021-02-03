import React from 'react';

class StepListItem extends React.Component{
  constructor(props){
    super(props); 

    this.toggleDone = this.toggleDone.bind(this); 
    this.handleRemoveStep = this.handleRemoveStep(this);
  }

  toggleDone(e){
    e.preventDefault();
    let newStep = Object.assign({}, this.props.step);
    newStep.done = !this.props.step.done;
    this.props.receiveStep(newStep.done);
    this.setState();
  }

  handleRemoveStep(e){
    e.preventDefault();
    this.props.removeStep(this.props.step); 
    this.setState();
  }

  render(){

    const {step, toggleDone} = this.props; 
    const {done} = step;
    return (
      <li> 
        <div>{step.title}</div>
        <div>{step.body}</div>
        <button onClick={this.toggleDone}>{done? "undo": "do"}</button>
        <button onClick={this.handleRemoveStep}>Remove</button>
      </li>
    )
  }
}

export default StepListItem;