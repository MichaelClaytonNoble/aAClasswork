//import the ajax actions we created in our session util file 
import {
  postUser,
  postSession,
  deleteSession
} from '../utils/session';

//receive current user 
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";


//action creator 
//the main job is to return a pojo with a type and payload 

//receive a user 
const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
  
});

// now we are ready to create our thunk action creators 
// this is to keep our state organized and in check

//takes in a user from the form 
//then performs an ajax call 
//upon success it dispatches the action with the 
//user returned by the ajax call 
export const createNewUser = formUser => dispatch => postUser(formUser)
  .then(user => dispatch(receiveCurrentUser(user)));

export const login = formUser => dispatch => postSession(formUser)
  .then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => deleteSession()
  .then( ()=> dispatch(logoutCurrentUser()));


//now we need to make a place in our state where we can store a user 
//this will be a session reducer 
