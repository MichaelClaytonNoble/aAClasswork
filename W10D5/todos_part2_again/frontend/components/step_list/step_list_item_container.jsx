
import {receiveStep, removeStep} from '../../actions/step_actions';
import StepListItem from './step_list_item';
import {connect} from 'react-redux';



const mapDispatchToProps = (dispatch, {step})=>{
  return{
    removeStep: ()=>dispatch(removeStep(step)),
    receiveStep: (step)=>dispatch(receiveStep(step))
  }
}

const SteplistItemContainer = connect(null, mapDispatchToProps)(StepListItem);

export default SteplistItemContainer;