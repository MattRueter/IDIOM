import {legacy_createStore} from "redux";
import { setReducer } from "./Reducers/setReducer";

const store = legacy_createStore(setReducer)

export default store;