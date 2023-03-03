import {configureStore} from "@reduxjs/toolkit";
import { setSlice } from "./Reducers/setReducer";
import { exerciseSlice } from "./Reducers/exerciseReducer";
import { folderSlice } from "./Reducers/folderReducer"
import { viewSlice } from "./Reducers/viewReducer"
import { counterSlice } from "./Reducers/counterReducer"
import { userSlice } from "./Reducers/userReducer";

const store = configureStore({
	reducer:{
		userReducer: userSlice.reducer,
		setReducer:setSlice.reducer,
		exerciseReducer: exerciseSlice.reducer,
		folderReducer:folderSlice.reducer,
		viewReducer:viewSlice.reducer,
		counterReducer:counterSlice.reducer
	}
})

export default store;