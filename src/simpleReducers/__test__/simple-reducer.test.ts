import { createSimpleReducerActionPair } from '../index';
/**
 * TODO: Describe file contents
 */



const initAction = {
	type: '@@INIT',
	payload: 'foo',
};

describe('String reducer', () => {
	it('Should return a function ', () => {
		const actionName = "FOO";
		const initialState = "initialStateOrSomeOtherString";
		const reducer = createSimpleReducerActionPair(actionName, initialState).reducer;
		
		expect(typeof reducer).toEqual("function");
	});
	
	it('Should return a reducer that dont respond to random anctions', () => {
		const actionName = "FOO";
		const initialState = "initialStateOrSomeOtherString";
		const reducer = createSimpleReducerActionPair(actionName, initialState).reducer;

		expect(reducer(undefined, initAction)).toEqual(initialState)
	});
	
	it('Should respond to the action that it is created with', () => {
		const actionName = "FOO";
		const payload =  "somePayload";
		const action = {
			type: actionName,
			payload
		};
		const initialState = "initialStateOrSomeOtherString";
		const reducer = createSimpleReducerActionPair(actionName, initialState).reducer;
		expect(reducer(undefined, action)).toEqual(payload)
	});
});

describe('String action', () => {
	it('Should return function', () => {
		const action = createSimpleReducerActionPair('foo', 'bar').action;
		expect(typeof action).toEqual("function");
	});
	
	it('Should return a function that takes one payload and returns an object', () => {
		const actionName = "FOO";
		const payload =  "somePayload";
		const action = createSimpleReducerActionPair(actionName, "").action;
		const expectedObject = {
			type: actionName,
			payload,
		};
		
		expect(action(payload)).toEqual(expectedObject);
	});
});


describe('Action and reducers together', () => {
	it('Should react to its own action', () => {
		const actionName = "SOME_ACTION_NAME";
		const payload =  3;
		const initialState = 234;
		const {reducer, action} = createSimpleReducerActionPair(actionName, initialState);
		
		expect(reducer(undefined, initAction)).toEqual(initialState);
		expect(reducer(undefined, action(payload))).toEqual(payload);
	});
});

describe('Generics', () => {
	it('Should work with numbers', () => {
		const actionName = "FOO";
		const payload =  3;
		const initialState = 234;
		const {reducer, action} = createSimpleReducerActionPair(actionName, initialState);
		
		const expectedObject = {
			type: actionName,
			payload,
		};
		
		const actionToDispatch = {
			type: actionName,
			payload,
		};
		
		
		expect(action(payload)).toEqual(expectedObject); // action
		expect(reducer(undefined, initAction)).toEqual(initialState); //initial state
		expect(reducer(undefined, actionToDispatch)).toEqual(payload); //initial state
	});
	
	it('Should work with arrays', () => {
		const actionName = "FOO";
		const payload = [3];
		const initialState = [234, 234];
		const {reducer, action} = createSimpleReducerActionPair(actionName, initialState);
		
		const expectedObject = {
			type: actionName,
			payload,
		};
		
		const actionToDispatch = {
			type: actionName,
			payload,
		};
		
		expect(action(payload)).toEqual(expectedObject); // action
		expect(reducer(undefined, initAction)).toEqual(initialState); //initial state
		expect(reducer(undefined, actionToDispatch)).toEqual(payload); //initial state
	});
	
	it('Should work with objects', () => {
		const actionName = "FOO";
		const payload = {
			lol: 23,
			foo: 5,
			someString: 'goddag'
		};
		const initialState = {
			lol: 3,
			foo: 3,
			someString: 'hej'
		};
		const {reducer, action} = createSimpleReducerActionPair(actionName, initialState);
		
		const expectedObject = {
			type: actionName,
			payload,
		};
		
		const actionToDispatch = {
			type: actionName,
			payload,
		};
		
		expect(action(payload)).toEqual(expectedObject); // action
		expect(reducer(undefined, initAction)).toEqual(initialState); //initial state
		expect(reducer(undefined, actionToDispatch)).toEqual(payload); //initial state
	});
});