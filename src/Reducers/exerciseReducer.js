import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	currentExercise: "flip",
};

export const exerciseSlice = createSlice({
	name: "exercise",
	initialState,
	reducers: {
		exerciseSelected(state, action){
			state.currentExercise = action.payload
		}
	}
});
export const { exerciseSelected } = exerciseSlice.actions;