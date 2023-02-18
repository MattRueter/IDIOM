import {configureStore} from "@reduxjs/toolkit";
import { setSlice,setSelected } from "./Reducers/setReducer";

const store = configureStore({
	reducer:{
		setReducer:setSlice.reducer,
	}
})

export default store;