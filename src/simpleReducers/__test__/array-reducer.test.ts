import { createArrayAppendReducerActionPair } from '../index';
/**
 * TODO: Describe file contents
 */


const initAction = {
	type: '@@INIT',
	payload: 'foo',
};

describe('Array append reducer', () => {
	it('Should return a function ', () => {
		const actionName = "FOO";
		const initialState = ["initialStateOrSomeOtherString"];
		const reducer = createArrayAppendReducerActionPair(actionName, initialState).reducer;
		
		expect(typeof reducer).toEqual("function");
	});
	
	xit('Should not change the old objects', () => {
		//TODO
	});
	
	it('Should return a reducer that dont respond to random anctions', () => {
		const actionName = "FOO";
		const initialState = ["initialStateOrSomeOtherString"];
		const reducer = createArrayAppendReducerActionPair(actionName, initialState).reducer;
		
		expect(reducer(undefined, initAction)).toEqual(initialState)
	});
	
	it('Should respond to the action that it is created with', () => {
		const actionName = "FOO";
		const payload = ["secondEntry"];
		const action = {
			type: actionName,
			payload
		};
		const initialState = ["initialState"];
		const reducer = createArrayAppendReducerActionPair(actionName, initialState).reducer;
		expect(reducer(undefined, action)).toEqual([...initialState, ...payload])
	});
});

describe('Action and reducers together', () => {
	it('Should react to its own action', () => {
		const actionName = "SOME_ACTION_NAME";
		const initialState = [1];
		const payload = [2, 3, 4];
		const {reducer, action} = createArrayAppendReducerActionPair(actionName, initialState);
		
		expect(reducer(undefined, initAction)).toEqual(initialState);
		expect(reducer(undefined, action(payload))).toEqual([1, 2, 3, 4]);
	});
});

describe('String action', () => {
	it('Should return function', () => {
		const action = createArrayAppendReducerActionPair('foo', ['bar']).action;
		expect(typeof action).toEqual("function");
	});
	
	it('Should return a function that takes one payload and returns an action with the same payload', () => {
		const actionName = "FOO";
		const payload = [234];
		const action = createArrayAppendReducerActionPair(actionName, [34]).action;
		const expectedObject = {
			type: actionName,
			payload,
		};
		
		expect(action(payload)).toEqual(expectedObject);
	});
});

describe('', () => {
	
});