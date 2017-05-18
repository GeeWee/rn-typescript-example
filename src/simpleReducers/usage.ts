import { createArrayAppendReducerActionPair, createSimpleReducerActionPair } from './index';
/**
 * TODO: Describe file contents
 */

/*
	Easy creation of typesafee reducers, that only replace the state
 */
const FOO_ACTION = "foo";
const initialState = 3;
//This creates an action and a reducer, that only takes numbers, because initialState is a number
const {action: fooAction, reducer: fooReducer} = createSimpleReducerActionPair(FOO_ACTION, initialState);

fooAction(3); //Yep!
fooAction('foo'); //Error - foo is not a number

export {fooAction, fooReducer}; //Easy export too!


//Also works with other types, numbers, arrays, objects, etc.
const BAR_ACTION = "bar";
const initalStringState = 'someNumber';
const {action: barAction, reducer: barReducer} = createSimpleReducerActionPair(BAR_ACTION, initalStringState);

barAction('foo'); //Yay
barAction(3); //Error - 3 is not a string

//TODO typecheck the arrayreducers


const ARRAY_ACTION = 'array-action';
const initialArrayState = ['hello'];
const {action: arrayAction} = createArrayAppendReducerActionPair(BAR_ACTION, initialArrayState);

arrayAction(['34']);
arrayAction([23]);
arrayAction([{someObject: 'foo'}]);


interface SomeSpecificType{
	foo: string,
	bar: number,
}

const {action: xx} = createArrayAppendReducerActionPair<SomeSpecificType>(BAR_ACTION, initialArrayState);

const someSpecificTypeImp = {
	foo: 'sdfd',
	bar: 32,
};

const {action: newArrayAction} = createArrayAppendReducerActionPair<SomeSpecificType>(BAR_ACTION, [someSpecificTypeImp]);
newArrayAction({
	foo: '23dsf', bar: 234
}); //Also works without array
newArrayAction([{foo: '23dsf', bar: 234}]);

newArrayAction({foo: 234}); //Error, not assignable to type


//TODO make it work with simple values in this array. e.g. add something that is not an array.