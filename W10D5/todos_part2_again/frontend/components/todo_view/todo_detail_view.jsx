import React from 'react';


class TodoDetailView extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    const {todo, removeTodo} = this.props;
    return (
    <div id="todo-detail-view">
      Details: 
      <div>{this.props.todo.body}</div>
      <div>{this.props.todo.done}</div>
      <button onClick={removeTodo}>Remove</button>
    </div>
  )
    }
}

export default TodoDetailView; 





