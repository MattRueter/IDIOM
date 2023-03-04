import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { counterReset, counterIncreased  } from "../../Reducers/counterReducer"
import { currentWordChanged } from "../../Reducers/exerciseReducer";
import Button from '../Button';
import { CounterDisplay } from "../CounterDisplay";

export const ResponseExercise = () =>{
		const state = useSelector((state) =>state);
		const dispatch = useDispatch();
		const currentSet  = state.setReducer.set ? state.setReducer.set : [{l1:"choose a set.", l2:"choose a set."}];
		const toggledLanguage =state.exerciseReducer.toggledLanguage;
		const currentWord = state.exerciseReducer.currentWord.word;
		const currentIndex = state.counterReducer.counter;
		const correctResponse = state.exerciseReducer.currentWord.word[1];
		const lastWordIndex = currentSet.length-1;
		const input = document.getElementById("input")
		const [ response, setResponse] = useState("");
		useEffect(() => {
			dispatch(currentWordChanged(currentSet[currentIndex]));		
		},[toggledLanguage, currentIndex]);
		
		const checkAnswer = () =>{	
			response === correctResponse ? 
				alert(`correct!`) : 
				alert(`wrong: ${correctResponse}`);

			input.value = "";
			nextCard() 
		}
	const updateResponse = (e) => {
		const newResponse =e.target.value;
		setResponse(newResponse)
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
			<input id={"input"}className={"exerciseInput"} placeholder={"write your response"} onChange={(e)=>updateResponse(e)}></input>
			<CounterDisplay />
			<div className={"buttonBox"}>
				<Button className={"exerciseButton"} handleClick={checkAnswer}buttonName={"Check"}></Button>
			</div>
		</div>
	)
}