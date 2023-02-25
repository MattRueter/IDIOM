import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import Button from '../Button';

export const MultiChoiceExercise = () =>{
	const state = useSelector((state) =>state);
	const currentSet = state.setReducer.set;
	const [ counter, setCounter] = useState(0)
	const [ next ] = useState("Next")
	const [ translate, setTranslate ] = useState("l1")
	const lastWord =currentSet.length-1;
	//STATE to consume here:
	// set (from Store)
	// options - make from all l2 words in FOLDER ( add to Store currently in Home comp.???) but must include current word's l2:value.
	// message component (A: congrats! B: Try again)
	//EVENTS:
	// click "opton" : resets SELECTED ANSWER object
	// click "check" : 1) compares SELECTED ANSWER to current word l2:value returns TRUE or FALSE.
	//				   2) goes to next word in list (make use of function in Flip Exercise ?) 					
	
	// dealing with Random()???
	
	const checkAnswer = () =>{

		changeCard()
	}
	
	const changeCard = (command) =>{
		setTranslate("l1");
		if(lastWord > 0){
			if(counter > 0 && counter < lastWord){
				command === next ? setCounter(counter + 1) : setCounter(counter - 1);
			}else if(counter === 0) {
				command === next ? setCounter(counter + 1) : setCounter(lastWord);
			}else if(counter === lastWord){
				command === next ? setCounter( 0 ) : setCounter(counter - 1);
			}
		}
	}
	return(
		<div className={"display"}>
			<div className={"card"}>{currentSet[counter][translate]}</div>
			<div className={"buttonBox"}>
				<Button className={"exerciseButton"} buttonName={"option"}></Button>
				<Button className={"exerciseButton"} buttonName={"option"}></Button>
				<Button className={"exerciseButton"} buttonName={"option"}></Button>
				<Button className={"exerciseButton"} buttonName={"option"}></Button>
			</div>
			<div className={"buttonBox"}>
				<Button className={"exerciseButton"} handleClick={checkAnswer}buttonName={"Check"}></Button> 
			</div>
		</div>
	)
}