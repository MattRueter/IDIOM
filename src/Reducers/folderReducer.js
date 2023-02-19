import { createSlice } from '@reduxjs/toolkit'
import { getFolders } from "../Utility_functions/utilities"

const initialState = {
	folders: getFolders(), 
	currentFolder: ""
};

export const folderSlice = createSlice({
	name:"folder",
	initialState,
	reducers:{
		folderSelected(state, action){
			state.currentFolder = action.payload
		},
		folderAdded(state, action){
			state.folders.push(action.payload)
		}
	}
})
export const { folderSelected, folderAdded } = folderSlice.actions