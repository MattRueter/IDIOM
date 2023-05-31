import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { shuffleArray } from "../../Utility_functions/utilities";

export const MatchingExercise = () =>{
	const state = useSelector((state) => state);
	const currentSet = state.setReducer.set;
	const [selectedChoices, setSelectedChoices] = useState(null)
	const [ L1cards, setL1Cards ] = useState(shuffleArray(currentSet.map(item => item)));
	const [ L2cards ,setL2cards ] = useState(shuffleArray(currentSet.map(item => item)));

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
		//make L1 cards
		const L_oneCards = L1cards.map((item,index) =>{
			return(
				<Card word={item.l1} key={index} handleClick={selectL1card}/>
			)
		});
		//make L2 cards
		const L_twoCards = L2cards.map((item,index) =>{
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