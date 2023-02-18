import {configureStore} from "@reduxjs/toolkit";
import { setReducer } from "./Reducers/setReducer";

const store = configureStore({
	reducer:{
		setReducer:setReducer,
	}
})

export default store;