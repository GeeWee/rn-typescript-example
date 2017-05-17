/**
 * TODO: Describe file contents
 */

export function createSimpleReducerActionPair<StateType>(actionName: string, initialState: StateType){
	return {
		reducer: createStandardReducer<StateType>(actionName, initialState),
		action: createStandardAction<StateType>(actionName),
	}
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

export function createArrayAppendReducerActionPair<StateType>(actionName: string, initialState : StateType[]){
	return {
		reducer: createArrayAppendReducer<StateType>(actionName, initialState),
		action: createStandardAction<StateType[]>(actionName),
	}
}

function createArrayAppendReducer<StateType>(actionName: string, initialState: StateType[]){
	return (state: StateType[] = initialState, action: UntypedAction) => {
		if (action.type === actionName){
			return [...state, ...action.payload];
		}
		return state;
	}
}


interface TypedAction<StateType> {
	type: string,
	payload: StateType
}

interface UntypedAction {
	type: string,
	payload: any,
}