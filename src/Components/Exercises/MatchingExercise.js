import { useState } from "react";
import { useSelector } from 'react-redux';
import { shuffleArray } from "../../Utility_functions/utilities";

export const MatchingExercise = () =>{
	const state = useSelector((state) => state);
	const currentSet = state.setReducer.set;
	const [selectedChoices, setSelectedChoices] = useState(null)
	const [ L1cards ] = useState(shuffleArray(currentSet.map(item => item)));
	const [ L2cards ] = useState(shuffleArray(currentSet.map(item => item)));

//SELECT CARDS ------------------------------------------
	const selectCard =(word, currentLanguage, e)=>{
		let columnNumber;
		currentLanguage === "l1" ? columnNumber = 0 : columnNumber = 1;
		
		//FIRST: Push word into selectedChoices object (checking logic will run base on state of this variable).
		setSelectedChoices(prev =>({
			...prev,
			[currentLanguage]:word
		}));

		//SECOND: Highlight card & unhighlight previous selection if exists---------------------------------------------
		const columns = document.getElementsByClassName("CardColumn");
		const currentColumn = columns[columnNumber].children;
		const cards = Array.from(currentColumn)
			cards.forEach((card)=>{
			if(card.classList[0] === "smallCardSelected"){
				card.classList = "smallCard"
			}
		});
		e.target.classList="smallCardSelected";

		//THIRD: Run checkAnswer code if 'selectedChoices' object has l1 and l2 value.
		//selectedChoics has l1 and l2 value ?
		console.log(selectedChoices)
		//find the object in the word library which matches the l1 word
			//does this object's l2 word match the l2 word in 'selectedChoices'?
			//YES: correct (run correct logic and messaging in UI)
			//NO: (run incorrect logic and messaging in the UI)
	}

//MAKE CARDS FOR UI: ###############################################################
		const makeCards = (cards) =>{
			let currentLanguage;
			let word;
			cards === L1cards ? currentLanguage = "l1" : currentLanguage = "l2";
			return cards.map((item,index)=>{
				word =item[currentLanguage]
				return(
					<Card word={word} language={currentLanguage} key={index} handleClick={selectCard}/>
				)	
			})
		}
		const L_oneCards = makeCards(L1cards);
		const L_twoCards = makeCards(L2cards);
//##################################################################################

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