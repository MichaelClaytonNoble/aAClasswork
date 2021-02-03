import React from 'react';
import receiveStep from '../../action/step_action'; 
import { stepsByTodoId } from '../../reducers/selectors';


const mapStateToProps = (state, {todo_id})=>{
  return {
    steps: stepsByTodoId(state, todo_id)
  }
}

const mapDispatchToProps = (dispatch) => {

  return({
    receiveStep: (step)=>dispatch(state, receiveStep(step))
  })

}

const SteplistContainer = connect(mapStateToProps,mapDispatchToProps)(StepList); 

export default SteplistContainer;