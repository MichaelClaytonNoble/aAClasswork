import React from 'react';
import SteplistItemContainer from './step_list_item_container';
import StepForm from './step_form';

class StepList extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    return (
      <div>
        <ul>
          {this.props.steps.map( (step, i)=> {
            return <SteplistItemContainer step={step} key={i}/>
          })}
        </ul>
        <StepForm todo_id={this.props.todo_id} receiveStep={this.props.receiveStep}/>
      </div>
    )
  }
}
export default StepList; 