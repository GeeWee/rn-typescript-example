/**
 * TODO: Describe file contents
 */

import _ from 'lodash';

export function createSimpleReducerActionPair<StateType>(actionName: string, initialState: StateType){
	return {
		reducer: createStandardReducer<StateType>(actionName, initialState),
		action: createStandardAction<StateType>(actionName),
	}
}

export function createArrayAppendReducerActionPair<StateType>(actionName: string, initialState : StateType[]){
	return {
		reducer: createArrayAppendReducer<StateType>(actionName, initialState),
		action: createStandardAction<StateType[] | StateType>(actionName),
	}
}

export function createObjectAppendReducerActionPair<StateType>(actionName: string, initialState : StateTypeObject<StateType>){
	return {
		reducer: createObjectAppendReducer<StateType>(actionName, initialState),
		action: createStandardAction<StateTypeObject<StateType> | StateType>(actionName),
	}
}

function createObjectAppendReducer<StateType>(actionName: string, initialState: StateTypeObject<StateType>){
	return (state: StateTypeObject<StateType> = initialState, action: UntypedAction) => {
		if (action.type === actionName){
			if (_.isPlainObject(action.type)){
				return [...state, ...action.payload];
			}
			return [...state, action.payload]
		}
		return state;
	}
}

function isPlainObject(object : any) {
	return (Object.prototype.toString.call(object) === "[object Object]");
}

function createStandardAction<StateType>(actionName: string){
	return (payload: StateType) => ({
		type: actionName,
		payload
	})
}

function createStandardReducer<StateType>(actionName: string, initialState: StateType){
	return (state: StateType = initialState, action: UntypedAction) => {
		if (action.type === actionName){
			return action.payload;
		}
		return state;
	}
}
function createArrayAppendReducer<StateType>(actionName: string, initialState: StateType[]){
	return (state: StateType[] = initialState, action: UntypedAction) => {
		if (action.type === actionName){
			if (Array.isArray(action.payload)){
				return [...state, ...action.payload];
			}
			return [...state, action.payload]
		}
		return state;
	}
}


interface StateTypeObject<StateType>{
	[Symbol.iterator](): IterableIterator<StateType>
}

interface TypedAction<StateType> {
	type: string,
	payload: StateType
}

interface UntypedAction {
	type: string,
	payload: any,
}