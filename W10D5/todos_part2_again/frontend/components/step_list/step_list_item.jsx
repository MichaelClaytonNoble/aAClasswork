import React from 'react';

class StepListItem extends React.Component{
  constructor(props){
    super(props); 

    this.toggleDone = this.toggleDone.bind(this); 
  }

  toggleDone(e){
    e.preventDefault();
    let newStep = Object.assign({}, this.props.step);
    newStep.done = !this.props.step.done;
    this.props.receiveStep(newStep);
  }


  render(){

    const {step} = this.props; 
    return (
            <li> 
              <div>{step.title}</div>
              <div>{step.body}</div>
              <button onClick={this.toggleDone}>{step.done? "undo step": "do step"}</button>
              <button onClick={this.props.removeStep}>Remove</button>
            </li>
          
        )
  }
}

export default StepListItem;