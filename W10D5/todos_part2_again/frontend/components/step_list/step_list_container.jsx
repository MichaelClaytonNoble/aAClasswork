
import {receiveStep} from '../../actions/step_actions'; 
import { stepsByTodoId } from '../../reducers/selectors';
import {connect } from 'react-redux'; 
import StepList from './step_list';


const mapStateToProps = (state, {todo_id})=>{
  return {
    steps: stepsByTodoId(state, todo_id),
    todo_id
  }
}

const mapDispatchToProps = (dispatch) => {

  return({
    receiveStep: (step)=>dispatch(receiveStep(step))
  })

}

const StepListContainer = connect(mapStateToProps,mapDispatchToProps)(StepList); 


export default StepListContainer;
