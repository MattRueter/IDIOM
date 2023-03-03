import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { counterReset, counterIncreased  } from "../../Reducers/counterReducer"
import { currentWordChanged, optionsUpdated } from "../../Reducers/exerciseReducer";
import {  shuffleArray, removeDuplicates } from "../../Utility_functions/utilities";
import Button from '../Button';

export const MultiChoiceExercise = () =>{
	const state = useSelector((state) =>state);
	const dispatch = useDispatch();
	const languageDirection =state.exerciseReducer.languageDirection;
	const currentSet = state.setReducer.set;
	const currentIndex = state.counterReducer.counter;

	const currentWord = state.exerciseReducer.currentWord.word;
	const options = state.exerciseReducer.currentWord.options;

	const lastWordIndex = currentSet.length-1;
	
	useEffect(() => {
		dispatch(currentWordChanged(currentSet[currentIndex]));
		/* 
		1.create an array of randomly selected words (l1/l2) from the current folder
		2.clude currentWord[1] in this array.
		3.Shuffle the array to sort them randomly.
		4.Pass the array to dispatch(optionsUpdated())		
		*/
		const optionA = 0
		const optionB = 1
		const optionC = 2
		const newOptions =[ 
			currentSet[optionA][languageDirection[1]],
			currentSet[optionB][languageDirection[1]],
			currentSet[optionC][languageDirection[1]],
			currentWord[1]
		];
		dispatch(optionsUpdated(newOptions))		
},[languageDirection, currentIndex, currentWord])
	
	
	
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
		nextCard() //counter increases
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
			<div className={"card"}>{currentWord[0]}</div>
			<div className={"buttonBox"}>
				<Button className={"exerciseButton"} buttonName={options[0]}></Button>
				<Button className={"exerciseButton"} buttonName={options[1]}></Button>
				<Button className={"exerciseButton"} buttonName={options[2]}></Button>
				<Button className={"exerciseButton"} buttonName={options[3]}></Button>
			</div>
			<div className={"buttonBox"}>
				<Button className={"exerciseButton"} handleClick={checkAnswer}buttonName={"Check"}></Button> 
			</div>
		</div>
	)
}