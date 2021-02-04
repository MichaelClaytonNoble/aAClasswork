
import React from 'react';

class Signup extends React.Component{
//create a local state that will keep the data from the form 
//create a constructor 
  constructor(props){
    super(props);
    this.state={
      username: '',
      password: '',
      email: ''
    };
    //bind the methods 
    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  //create a method that will handle the input from all of the fields
  //it will also set the state and update it 
  //wrapping the type in [] means that it must be evaluated before its assigned
  //to the key

  handleInput(type){
    return (e)=>{
      this.setState({[type]: e.target.value});
    };
  }

  //create a method that will submit our state to the back end 
  handleSubmit(e){
    //without this a post request is sent and the entire page re-renders
    e.preventDefault(); 
    //get the method from the container that is passed in the props
    //history comes from a router that we will add later 
    //upon successful ajax call to back end we want to redirect the page 
    this.props.createNewUser(this.state).then( ()=> this.props.history.push('/chirps'));
  }
  render (){

    return(
      <div className="session-form">
        <h2> Sign Up!</h2>
        <form>
          <label>Username: 
            <input type="text" value={this.state.username} onChange={this.handleInput('username')}/>
          </label>
          <label>Email: 
            <input type="text" value={this.state.email} onChange={this.handleInput('email')}/>
          </label>
          <label>Password: 
            <input type="text" value={this.state.password} onChange={this.handleInput('password')}/>
          </label>
          <button onClick={this.handleSubmit}>Sign Up</button>
        </form>


      </div>
    )
  };


}

export default Signup; 
