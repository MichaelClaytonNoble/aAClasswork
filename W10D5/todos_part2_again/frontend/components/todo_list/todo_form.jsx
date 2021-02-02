import React from 'react';
import uniqueId from '../../util/unique_id';
class TodoForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      id: uniqueId(),
      title: '',
      body: '',
      done: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleBody = this.handleBody.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();

    this.props.receiveTodo(this.state);
    this.setState({
      id: uniqueId(),
      title: '',
      body: '',
      done: false
    });
  }

  handleTitle(e){

    this.setState({title: e.target.value});
  }
  handleBody(e){

    this.setState({body: e.target.value});
  }
  render(){

    return (
      <form onSubmit={this.handleSubmit}>
        <br />
        <label>Title: 
          <input type="text" onChange={this.handleTitle} value={this.state.title}/>
        </label>
        <label>Body: 
          <input type="text" onChange={this.handleBody} value={this.state.body}/>
        </label>
        <br />
        <button>Add Todo</button>
      </form>
    );
  }

}

export default TodoForm;
