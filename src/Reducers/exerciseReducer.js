import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	toggledLanguage: ["l1","l2"],
	currentExercise: "flip",
	currentWord:{word:["",""], options:[]}
};

export const exerciseSlice = createSlice({
	name: "exercise",
	initialState,
	reducers: {
		toggledLanguageChanged(state){
			state.toggledLanguage = state.toggledLanguage.reverse()
		},
		exerciseSelected(state, action){
			state.currentExercise = action.payload
		},
		currentWordChanged(state, action){
			const fromLanguage = state.toggledLanguage[0];
			const targetLanguage = state.toggledLanguage[1];
			const word = action.payload[fromLanguage];
			const answer = action.payload[targetLanguage];

			state.currentWord.word[0] = word;
			state.currentWord.word[1] = answer;
		},
		optionsUpdated(state, action){
			//
			state.currentWord.options = action.payload;
		} 
	}
});
export const { 
	exerciseSelected, 
	currentWordChanged,
	toggledLanguageChanged, 
	optionsUpdated 
} = exerciseSlice.actions;