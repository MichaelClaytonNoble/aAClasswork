
import React from 'react';
import TodoDetailView from '../todo_view/todo_detail_view'; 

class TodoListItem extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {details: false};
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    this.handleUpdateDone = this.handleUpdateDone.bind(this);
    this.toggleDetails = this.toggleDetails.bind(this); 
  }

  handleRemoveTodo(e){
    e.preventDefault();
    this.props.removeTodo(this.props.todo);
    this.setState();
  }

  toggleDetails(e){
    e.preventDefault();
    this.setState({details: !this.state.details});
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
    let {done} = todo; 

    return (
        <div id="todo-list-item">
          <h3 id="title" onClick={this.toggleDetails}>{todo.title}</h3>
          {this.state.details? <TodoDetailView todo={todo} removeTodo={this.handleRemoveTodo}/> : ""}
          <button onClick={this.handleUpdateDone}>{done ? "undo" : "do"}</button>      
        </div>
    );
  }
}
export default TodoListItem; 