import {configureStore} from "@reduxjs/toolkit";
import { setSlice,setSelected } from "./Reducers/setReducer";
import { exerciseSlice, exerciseSelected } from "./Reducers/exerciseReducer";

const store = configureStore({
	reducer:{
		setReducer:setSlice.reducer,
		exerciseReducer: exerciseSlice.reducer
	}
})

export default store;