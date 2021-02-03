import React from 'react';


class TodoDetailView extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
    <div id="todo-detail-view">
      <div>{this.props.todo.body}</div>
      <div>{this.props.todo.done}</div>
    </div>
  )
    }
}

export default TodoDetailView; 





