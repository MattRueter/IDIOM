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
		},
		counterManuallySet( state, action ){
			state.counter = action.payload;
		}
	}
})
export const { 
	counterReset, 
	counterIncreased, 
	counterDecreased,
	counterManuallySet
} = counterSlice.actions