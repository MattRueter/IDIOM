import { createSlice } from '@reduxjs/toolkit'
import { getLabelsFromSet } from "../Utility_functions/utilities"

const initialState = {
	set: null,
	currentSetLabels:[],
	makeSetFrom:[]
}

export const setSlice = createSlice({
	name: "sets",
	initialState,
	reducers: {
		setSelected(state, action){
			if(state.makeSetFrom.length>=1){
				state.set = action.payload
				state.currentSetLabels = [...state.makeSetFrom]
				state.makeSetFrom = []
			}
		},
		setLabelsUpdated(state,action){
			console.log("constructing reducer.")
		},
		labelSelected(state,action){
			state.makeSetFrom =[...state.makeSetFrom, action.payload]
		}
	}
})
export const { setSelected, labelSelected, setLabelsUpdated } = setSlice.actions
