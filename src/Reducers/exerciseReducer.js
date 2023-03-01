import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	currentExercise: "flip",
	multipleChoice:{
		currentWord:"",
		answer:"",
		options:[],
	}
};

export const exerciseSlice = createSlice({
	name: "exercise",
	initialState,
	reducers: {
		exerciseSelected(state, action){
			state.currentExercise = action.payload
		},
		nextCardSelected(state, action){
			const word =action.payload.l1;
			const answer = action.payload.l2;

			state.multipleChoice.currentWord = word;
			state.multipleChoice.answer =answer;
		}
	}
});
export const { exerciseSelected, nextCardSelected } = exerciseSlice.actions;