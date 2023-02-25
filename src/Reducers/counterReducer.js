import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	counter: 0,
}

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		counterReset( state ){
			state.counter = 0;
		},
		counterIncreased( state ){
			state.counter ++;
		},
		counterDecreased( state ){
			state.counter --;
		}
	}
})
export const { counterReset, counterIncreased, counterDecreased } = counterSlice.actions