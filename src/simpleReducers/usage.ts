import { createReducerActionPair } from './index';
/**
 * TODO: Describe file contents
 */

/*
	Easy creation of typesafee reducers, that only replace the state
 */
const FOO_ACTION = "foo";
const initialState = 3;
//This creates an action and a reducer, that only takes numbers, because initialState is a number
const {action: fooAction, reducer: fooReducer} = createReducerActionPair(FOO_ACTION, initialState);

fooAction(3); //Yep!
fooAction('foo'); //Error - foo is not a number

export {fooAction, fooReducer}; //Easy export too!


//Also works with other types, numbers, arrays, objects, etc.
const BAR_ACTION = "bar";
const initalStringState = 'someNumber';
const {action: barAction, reducer: barReducer} = createReducerActionPair(BAR_ACTION, initalStringState);

barAction('foo'); //Yay
barAction(3); //Error - 3 is not a string


