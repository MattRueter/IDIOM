import { useState } from "react";
import { useSelector } from 'react-redux';
import { shuffleArray } from "../../Utility_functions/utilities";

export const MatchingExercise = () =>{
	const state = useSelector((state) => state);
	const currentSet  = state.setReducer.set ? state.setReducer.set : [{l1:"choose a set.", l2:"choose a set."}];
	const [selectedCards, setselectedCards] = useState({l1:"", l2:""})


//SELECT CARDS ------------------------------------------
	const selectCard =(word, currentLanguage, e)=>{
		if(e.target.classList[0] !=="smallCardTurnedOff"){
			let columnNumber;
			currentLanguage === "l1" ? columnNumber = 0 : columnNumber = 1;
			
			//FIRST: Push word into selectedCards object (checking logic will run base on state of this variable).
			//... make immutable copy of selectedCards for evaluation (updates to state aren't immediately available).
			setselectedCards(prev =>({
				...prev,
				[currentLanguage]:word
			}));
			const cardsToEvaluate = {...selectedCards};
				cardsToEvaluate[currentLanguage] = word;
			
			//SECOND: Highlight card & unhighlight previous selection if exists.
			highlightCard(columnNumber, e);
			
			//THIRD: If selectedCards has l1 and l2 value, run checkAnswer code.
			if(cardsToEvaluate.l1 !=="" && cardsToEvaluate.l2 !==""){
				checkAnswer(cardsToEvaluate)
			}
		}
	}

//HELPER Functions#####################################################################
const checkAnswer = (cardsToEvaluate) => {
	//destructure 'answer' so it is also an object ?
	const answer = currentSet.filter((word)=> word.l1 === cardsToEvaluate.l1);
	if(answer[0].l2 === cardsToEvaluate.l2){
		alert("correct");
		reset(cardsToEvaluate);
		turnOffCard();
	}else{
		alert(`incorrect`)
	}
};
const reset = (cardsToEvaluate) =>{
	setselectedCards({l1:"", l2:""});
};
//DRY turnOffCard and highlightCard functions.
const turnOffCard = () =>{
	let columns = document.getElementsByClassName("CardColumn");
	const leftColumn = Array.from(columns[0].children);
	const rightColumn = Array.from(columns[1].children);
	let cards = [...leftColumn, ...rightColumn];
	cards.forEach((card)=>{
		if(card.classList[0] === "smallCardSelected"){
			card.classList = "smallCardTurnedOff"
		}		
	});
}
const highlightCard = (columnNumber, e) =>{
	const columns = document.getElementsByClassName("CardColumn");
	const currentColumn = columns[columnNumber].children;
	const cards = Array.from(currentColumn)
		cards.forEach((card)=>{
		if(card.classList[0] === "smallCardSelected"){
			card.classList = "smallCard"
		}
	});
	e.target.classList="smallCardSelected";
};
//MAKE CARDS FOR UI: ###############################################################
	const makeCards = (language, currentSet) =>{
		//useState(shuffleArray(currentSet.map(item => item)));
		
		let currentLanguage;
		let word;
		language === "L1cards" ? currentLanguage = "l1" : currentLanguage = "l2";
		return currentSet.map((item,index)=>{
			word =item[currentLanguage]
			return(
				<Card word={word} language={currentLanguage} key={index} handleClick={selectCard}/>
			)	
		})
	}
	const L_oneCards = makeCards("L1cards", currentSet);
	const L_twoCards = makeCards("L2cards", currentSet);
//###################################################################################
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

const Card = ({word, language, handleClick}) =>{
	return (
		<div className={"smallCard"} onClick={(e)=>handleClick(word,language,e)}>{word}</div>
	)
}