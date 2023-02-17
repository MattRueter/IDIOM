import { SELECT_SET } from "../ActionTypes/actionTypes";;

const initialState = {
	set: null
}

export const setReducer = (state = initialState, action) => {
	switch(action) {
		case SELECT_SET:
			return {
				set: action.payload
			}
		default:
			return state;
	}
}