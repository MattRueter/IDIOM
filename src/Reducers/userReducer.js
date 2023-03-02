import { createSlice } from '@reduxjs/toolkit'
import { wordLibrary } from "../Data/wordCollection"

const initialState = {
	user: "demo",
	library: wordLibrary,
}

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		userLoggedIn(state, action){
			state.user = action;
		},
		librarySelected(state, action){
			state.library = action
		}
	}
})