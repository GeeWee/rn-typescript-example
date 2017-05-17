/**
 * TODO: Describe file contents
 */

export function createReducerActionPair<StateType>(actionName: string, defaultState: StateType){
	return {
		reducer: createStandardReducer<StateType>(actionName, defaultState),
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
	return (state: StateType = initialState, action: StandardAction) => {
		if (action.type === actionName){
			return action.payload;
		}
		return state;
	}
}


interface StandardAction {
	type: string,
	payload: any
}