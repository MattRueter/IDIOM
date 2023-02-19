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
