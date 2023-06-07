import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { shuffleArray } from "../../Utility_functions/utilities";

export const MatchingExercise = () =>{
	const state = useSelector((state) => state);
	const currentSet = state.setReducer.set;
	const [selectedChoices, setSelectedChoices] = useState(null)
	const [ L1cards ] = useState(shuffleArray(currentSet.map(item => item)));
	const [ L2cards ] = useState(shuffleArray(currentSet.map(item => item)));


//SELECT CARDS ------------------------------------------
//simplify this code into one function replacing 'l1' and 'l2' with variable
//SELECTING L1 #################################################################################
	const selectL1card =(card)=>{
		const word = card.target.textContent
		setSelectedChoices(prev =>({
			...prev,
			l1:word
		}));
			//highlight card & unhighlight previous selection if exists---------------------------------------------
			//if any 'leftColum' elements have className "smallCardSelected" assigned to them --> unassign
			const columns = document.getElementsByClassName("CardColumn");
			const leftColumn = columns[0].children;
			const L1_cards = Array.from(leftColumn)
			L1_cards.forEach((card)=>{
				if(card.classList[0] === "smallCardSelected"){
					card.classList = "smallCard"
				}
			});
			//then run code to assign "smallCardSelected" to current clicked element.			
			card.target.classList="smallCardSelected";
			//--------------------------------------------------------------------------------------------------------			
		//run check answer code if 'selectedChoices' object has l1 and l2 value.
	}
//SELECTING L2#################################################################################
	const selectL2card =(card)=>{
		const word = card.target.textContent
		setSelectedChoices(prev =>({
			...prev,
			l2:word
		}));
			//highlight card & unhighlight previous selection if exitsts----------------------------------
			//if any 'leftColum' elements have className "smallCardSelected" assigned to them --> unassign
			const columns = document.getElementsByClassName("CardColumn");
			const rightColumn = columns[1].children;
			const L2_cards = Array.from(rightColumn)
			L2_cards.forEach((card)=>{
				if(card.classList[0] === "smallCardSelected"){
					card.classList = "smallCard"
				}
			});
			//then run code to assign "smallCardSelected" to current clicked element.			
			card.target.classList="smallCardSelected";
			//------------------------------------------------------------------------------------------------------		
		//run check answer code if 'selectedChoices' object has l1 and l2 value.
	}
//-----------------------------------------------------------	

//MAKE CARDS FOR UI:
		const makeCards = (language) =>{
			let selectCard;
			language === L1cards ? selectCard = selectL1card : selectCard = selectL2card;
			return language.map((item,index)=>{
				return(
					<Card word={item.l1} key={index} handleClick={selectCard}/>
				)	
			})
		}
		const L_oneCards = makeCards(L1cards);
		const L_twoCards = makeCards(L2cards);

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