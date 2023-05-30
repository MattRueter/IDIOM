import { useState } from "react";
import { useSelector } from 'react-redux';
import { shuffleArray } from "../../Utility_functions/utilities";

export const MatchingExercise = () =>{
	const state = useSelector((state) => state);
	const currentSet = state.setReducer.set;
	const [selectedChoices, setSelectedChoices] = useState({l1:"", l2:""})

//clicking events ------------------------------------------
	const selectL1card =(card)=>{
		const word = card.target.textContent
		setSelectedChoices(prev =>({
			...prev,
			l1:word
		}));
		console.log(selectedChoices)
	}
	const selectL2card =(card)=>{
		const word = card.target.textContent
		setSelectedChoices(prev =>({
			...prev,
			l2:word
		}));
		console.log(selectedChoices)
	}
//-----------------------------------------------------------	
	//make and shuffle L1 cards
	let L_oneCards = currentSet.map(item => item);
	L_oneCards = shuffleArray(L_oneCards);
	L_oneCards = L_oneCards.map((item,index) =>{
		return(
			<Card word={item.l1} key={index} handleClick={selectL1card}/>
		)
	});
	//make and shuffle L2 cards
	let L_twoCards = currentSet.map(item => item);
	L_twoCards = shuffleArray(L_twoCards);
	L_twoCards = L_twoCards.map((item,index) =>{
		return(
			<Card word={item.l2} key={index} handleClick={selectL2card}/>
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
const Card = ({word, handleClick}) =>{
	return (
		<div className={"smallCard"} onClick={handleClick}>{word}</div>
	)
}