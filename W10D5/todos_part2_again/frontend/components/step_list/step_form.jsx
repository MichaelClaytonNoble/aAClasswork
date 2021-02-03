import React from 'react';
import uniqueId from '../../util/unique_id';

class StepForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      id: uniqueId(),
      title: '',
      body: '',
      done: false,
      todo_id: this.props.todo_id
    }
    this.handleSubmit=this.handleSubmit.bind(this); 
    this.handleTitle = this.handleTitle.bind(this);
    this.handleBody = this.handleBody.bind(this); 

  }

  handleSubmit(e){
    e.preventDefault();
    const step = Object.assign({}, this.state);
    this.props.receiveStep(step);
    this.setState({
      id: uniqueId(),
      title: '',
      body: ''
    });
  }
  
  handleTitle(e){
    e.preventDefault();
    this.setState({title: e.target.value})
    
  }
  handleBody(e){
    e.preventDefault();
    this.setState({body: e.target.value})
  }
  render(){

    return (

      <form onSubmit={this.handleSubmit}>
        Step Form
        <label>Title: 
        <input type="text" onChange={this.handleTitle} value={this.state.title}/>
        </label>

        <label>Body:
          <input type="text" onChange={this.handleBody} value={this.state.body}/>
        </label>

        <button>Add Step</button>
      </form>
    )
  }
}

export default StepForm; 