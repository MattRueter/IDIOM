import {configureStore} from "@reduxjs/toolkit";
import { setSlice,setSelected } from "./Reducers/setReducer";
import { exerciseSlice, exerciseSelected } from "./Reducers/exerciseReducer";
import { folderSlice, folderAdded } from "./Reducers/folderReducer"
import { viewSlice, viewSelected } from "./Reducers/viewReducer"

const store = configureStore({
	reducer:{
		setReducer:setSlice.reducer,
		exerciseReducer: exerciseSlice.reducer,
		folderReducer:folderSlice.reducer,
		viewReducer:viewSlice.reducer
	}
})

export default store;