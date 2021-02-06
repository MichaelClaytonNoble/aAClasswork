//createStore( reducer , preloadedState, enhancers/middleware); 
import {createStore, applyMiddleware} from 'redux';

import {rootReducer} from '../reducers/root_reducer';

//this is our middle ware 
import {requestAllPokemon} from '../middleware/thunk';
import {logger} from 'redux-logger';


//use configureStore instead of just exporting the call to createStore(x,x(x)); 
export const configureStore = () => createStore( rootReducer, applyMiddleware(requestAllPokemon, logger) ); 


