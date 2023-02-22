import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	set: null,
	makeSetFrom:[]
}

export const setSlice = createSlice({
	name: "sets",
	initialState,
	reducers: {
		setSelected(state, action){
			state.set = action.payload
			state.makeSetFrom = []
		},
		labelSelected(state,action){
			state.makeSetFrom =[...state.makeSetFrom,action.payload]
		}
	}
})
export const { setSelected, labelSelected } = setSlice.actions
