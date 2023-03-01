import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { counterReset, counterIncreased  } from "../../Reducers/counterReducer"
import { currentWordChanged } from "../../Reducers/exerciseReducer";
import Button from '../Button';

export const MultiChoiceExercise = () =>{
	const state = useSelector((state) =>state);
	const dispatch = useDispatch();
	const currentSet = state.setReducer.set;
	const currentIndex = state.counterReducer.counter;
	const currentWord = state.exerciseReducer.currentWord[0];
	const languageDirection =state.exerciseReducer.languageDirection;
	const lastWordIndex = currentSet.length-1;
	
	useEffect(() => {
		dispatch(currentWordChanged(currentSet[0]))
	},[])

	useEffect (() => {
		dispatch(currentWordChanged(currentSet[currentIndex]))
	},[languageDirection, currentIndex]);

	const checkAnswer = () =>{
		// is selected answer === correct answer ?
			//yes? then send feedback to UI and push word obj to correct array.
			//no? then send feedback toUI and push word obj to incorrect array.
		
		//Is this the last word?
			//yes? Is the incorrect array empty?
				//yes? then send Congrats msg.
					//...and RESET game using original Set from Store.
				//no? then send Try again msg.
					//...and RESET game using Incorrect array.
			//No? Then continue.
			nextCard()
	}
	
	const nextCard = () =>{
		if(lastWordIndex > 0){
			if(currentIndex < lastWordIndex){
				dispatch(counterIncreased());
			}else if(currentIndex === lastWordIndex){
				dispatch(counterReset())
			}
		}
	};
	return(
		<div className={"display"}>
			<div className={"card"}>{currentWord}</div>
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