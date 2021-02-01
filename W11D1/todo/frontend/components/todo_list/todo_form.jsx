import React from 'react';

class TodoForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: Math.floor(Math.random() * 1000),
      title: '',
      body: ''
    };


    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this); 
    this.handleSubmit= this.handleSubmit.bind(this);  
  }

  updateTitle(e){
    this.setState({
      title: e.target.value
    });
  }
  updateBody(e){
    this.setState({
      body: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState = ({
      id: Math.floor(Math.random() * 1000),
      title: '',
      body: ''
    });
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Add To do</h1>
        <label>Title: 
        <input onChange={this.updateTitle} type="text" value={this.state.title}/>
        </label>

        <label>Body: 
        <input onChange={this.updateBody} type="text" value={this.state.body}/>
        </label>
        
        <input type="submit" value="Add Todo"/>
      </form>
    );
  }
}
export default TodoForm;


