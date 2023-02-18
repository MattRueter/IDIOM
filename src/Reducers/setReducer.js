import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	set: null
}
//RTK sliceReducer
export const setSlice = createSlice({
	name: "sets",
	initialState,
	reducers: {
		setSelected(state, action){
			state.set = action.payload
		}
	}
})
export const { setSelected } = setSlice.actions

/*
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
//action type
export const select_set = () => {
	return SELECT_SET
};

//action 
export const SELECT_SET ={ 
	type:"SELECT_SET", 
	payload:[
		{
		l1:"test", 
		l2:"prueba", 
		folder:"spanish", 
		labels:["basic", "test"]
		}
	]
}
*/
//reducer