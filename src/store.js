import {configureStore} from "@reduxjs/toolkit";
import { setSlice,setSelected } from "./Reducers/setReducer";
import { exerciseSlice, exerciseSelected } from "./Reducers/exerciseReducer";
import { folderSlice, folderAdded } from "./Reducers/folderReducer"

const store = configureStore({
	reducer:{
		setReducer:setSlice.reducer,
		exerciseReducer: exerciseSlice.reducer,
		folderReducer:folderSlice.reducer
	}
})

export default store;