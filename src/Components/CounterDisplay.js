import { useSelector } from "react-redux"
export const CounterDisplay = () => {
	const state = useSelector((state) => state);
	const currentCard = state.counterReducer.counter + 1;
	const currentSet  = state.setReducer.set ? state.setReducer.set : [{l1:"choose a set.", l2:"choose a set."}];
	const total = currentSet.length;

	return(
		<div>{`${currentCard} / ${total}`}</div>
	)
}