import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	languageDirection: ["l1","l2"],
	currentExercise: "flip",
	currentWord:["",""],
	multipleChoice:{
		options:[],
	}
};

export const exerciseSlice = createSlice({
	name: "exercise",
	initialState,
	reducers: {
		languageDirectionChanged(state){
			state.languageDirection = state.languageDirection.reverse()
		},
		exerciseSelected(state, action){
			state.currentExercise = action.payload
		},
		currentWordChanged(state, action){
			const fromLanguage = state.languageDirection[0];
			const targetLanguage = state.languageDirection[1];
			const word = action.payload[fromLanguage];
			const answer = action.payload[targetLanguage];

			state.currentWord[0] = word;
			state.currentWord[1] = answer;
		}
	}
});
export const { exerciseSelected, currentWordChanged, languageDirectionChanged } = exerciseSlice.actions;