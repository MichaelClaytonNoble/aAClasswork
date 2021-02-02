import React from 'react';

class TodoForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      id: Math.floor(Math.random() * 1000),
      title: '',
      body: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleBody = this.handleBody.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.state);

    this.props.receiveTodo(this.state);
    this.setState({
      id: Math.floor(Math.random() * 1000),
      title: '',
      body: ''
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
