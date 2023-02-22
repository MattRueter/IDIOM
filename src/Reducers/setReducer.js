import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	set: null,
	labelArray:[]
}

export const setSlice = createSlice({
	name: "sets",
	initialState,
	reducers: {
		setSelected(state, action){
			state.set = action.payload
			state.labelArray = []
		},
		labelSelected(state,action){
			state.labelArray =[...state.labelArray,action.payload]
		}
	}
})
export const { setSelected, labelSelected } = setSlice.actions
