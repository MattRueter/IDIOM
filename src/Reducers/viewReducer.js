import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	currentView:"Show folders"
};

export const viewSlice = createSlice({
	name:"view",
	initialState,
	reducers: {
		viewSelected(state, action){
			state.currentView = action.payload
		}
	}
});
export const { viewSelected } = viewSlice.actions