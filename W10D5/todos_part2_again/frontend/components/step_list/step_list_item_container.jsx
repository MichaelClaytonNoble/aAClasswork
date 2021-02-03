import React from 'react';
import removeStep from '../../actions/step_actions';
import StepListItem from './step_list';

const mapDispatchToProps = (dispatch)=>{
  return{
    removeStep: (step)=>dispatch(removeStep(step)),
    receiveStep: (step)=>dispatch(receiveStep(step))
  }
}

const SteplistItemContainer = connect(null, mapDispatchToProps)(SteplistItem);

export default SteplistItemContainer; 