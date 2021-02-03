import React from 'react';
import StepListContainer from '../step_list/step_list_container';

class TodoDetailView extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    const {todo, removeTodo} = this.props;
    return (
    <div id="todo-detail-view">
      <div>{this.props.todo.body}</div>
      <div>{this.props.todo.done}</div>
      <StepListContainer todo_id={this.props.todo.id} />
      <button onClick={removeTodo}>Remove Todo</button>
    </div>
  )
    }
}

export default TodoDetailView; 





