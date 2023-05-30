import { useSelector } from 'react-redux';

export const MatchingExercise = () =>{
	const state = useSelector((state) => state);
	const currentSet = state.setReducer.set;
	const L_oneCards =currentSet.map((item,index) =>{
		return(
			<Card word={item.l1} key={index} />
		)
	});
	const L_twoCards = currentSet.map((item,index) =>{
		return(
			<Card word={item.l2} key={index} />
		)
	});
	return(
		<div className={"displayROW"}>
			<div className={"CardColumn"}>
				{L_oneCards}
			</div>
			<div className={"CardColumn"}>
				{L_twoCards}
			</div>
		</div>
	)
}
const Card = ({word}) =>{
	return (
		<div className={"smallCard"}>{word}</div>
	)
}