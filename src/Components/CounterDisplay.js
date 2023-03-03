import { useSelector } from "react-redux"
export const CounterDisplay = () => {
	const state = useSelector((state) => state);
	const currentCard = state.counterReducer.counter;
	const total = state.setReducer.set.length;
	return(
		<div>{`${currentCard} / ${total}`}</div>
	)
}