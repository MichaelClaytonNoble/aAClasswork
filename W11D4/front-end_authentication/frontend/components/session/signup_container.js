//
// import everything we need for a container 

import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import Signup from './signup';

//we want to pass down the action required to set up user 
//into the signup component 

const mapDispatchToProps = dispatch =>({
  createNewUser: formUser => dispatch(createNewUser(formUser))
});

export default connect(null, mapDispatchToProps)(Signup);


//mapDispatchToProps gives the signup container access to its methods
//through it's props 

//we can call this.props.createNewUser pass it a json object 
//and it will create a new user for us 
