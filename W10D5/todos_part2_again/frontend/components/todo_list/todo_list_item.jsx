
import React from 'react';

class TodoListItem extends React.Component{
  constructor(props){
    super(props);
 
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    this.handleUpdateDone = this.handleUpdateDone.bind(this);
  }

  handleRemoveTodo(e){
    e.preventDefault();
    this.props.removeTodo(this.props.todo);
    this.setState();
  }


  handleUpdateDone(e){
    e.preventDefault();
    let todoCopy = Object.assign({}, this.props.todo);
    todoCopy.done = !todoCopy.done;
    this.props.receiveTodo(todoCopy);

    this.setState;
  }
  render(){
    const {todo} = this.props;
    let done = "do";
    if(this.props.todo.done){
      done = "undo";
    }
    return (
      <li>{todo.title}
        <button onClick={this.handleUpdateDone}>{done}</button>      
        <button onClick={this.handleRemoveTodo}>Remove Todo</button>      
      </li>
    );
  }
}
export default TodoListItem; 