import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	exercise: "flip"
};

export const exerciseSlice = createSlice({
	name: "exercise",
	initialState,
	reducers: {
		exerciseSelected(state, action){
			state.exercise = action.payload
		}
	}
});
export const { exerciseSelected } = exerciseSlice.actions;