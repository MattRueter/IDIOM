import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { counterReset, counterIncreased  } from "../../Reducers/counterReducer"
import { currentWordChanged, optionsUpdated } from "../../Reducers/exerciseReducer";
import { shuffleArray } from "../../Utility_functions/utilities";
import Button from '../Button';
import { CounterDisplay } from "../CounterDisplay";

export const MultiChoiceExercise = () =>{
	const state = useSelector((state) =>state);
	const dispatch = useDispatch();
	const toggledLanguage =state.exerciseReducer.toggledLanguage;
	const currentSet = state.setReducer.set;
	const lastWordIndex = currentSet.length-1;
	const currentIndex = state.counterReducer.counter;

	const currentWord = state.exerciseReducer.currentWord.word;
	const options = state.exerciseReducer.currentWord.options;
	//_________Think of a cleaner way __________________________________
	let optionLibrary = state.userReducer.library.filter(word => word.folder === state.folderReducer.currentFolder);
		optionLibrary = optionLibrary.map(word => word[toggledLanguage[1]]);
		optionLibrary = shuffleArray(optionLibrary)
		optionLibrary = optionLibrary.filter(word => word !==currentWord[1]);
		let newOptions =[...optionLibrary.splice(0,3),currentWord[1]];
			newOptions = shuffleArray(newOptions);
	//__________________________________________________________________________________________
	//________________________________________________________
	let selectedAnswer = "";
	//________________________________________________________

	useEffect(() => {
		dispatch(currentWordChanged(currentSet[currentIndex]));
		dispatch(optionsUpdated(newOptions))		
	},[toggledLanguage, currentIndex, currentWord])
	
	
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
		
		selectedAnswer === currentWord[1] ? displayMessage("correct.") : displayMessage("wrong.")
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
	const displayMessage = (msg) => {
		alert(msg)
	};
	const selectAnswer = (word) =>{
		selectedAnswer = word
	}
	return(
		<div className={"display"}>
			<div 
				className={"card"}>
					{currentWord[0]}
			</div>
			<CounterDisplay />
			<div className={"buttonBox"}>
				<Button handleClick={selectAnswer} className={"exerciseButton"} buttonName={options[0]}></Button>
				<Button handleClick={selectAnswer} className={"exerciseButton"} buttonName={options[1]}></Button>
				<Button handleClick={selectAnswer} className={"exerciseButton"} buttonName={options[2]}></Button>
				<Button handleClick={selectAnswer} className={"exerciseButton"} buttonName={options[3]}></Button>
			</div>
			<div className={"buttonBox"}>
				<Button className={"exerciseButton"} handleClick={checkAnswer}buttonName={"Check"}></Button> 
			</div>
		</div>
	)
}