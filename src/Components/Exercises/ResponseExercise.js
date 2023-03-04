import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { counterReset, counterIncreased  } from "../../Reducers/counterReducer"
import { currentWordChanged, optionsUpdated } from "../../Reducers/exerciseReducer";
import Button from '../Button';

export const ResponseExercise = () =>{
		const state = useSelector((state) =>state);
		const dispatch = useDispatch();
		const currentSet  = state.setReducer.set ? state.setReducer.set : [{l1:"choose a set.", l2:"choose a set."}];
		const currentWord = state.exerciseReducer.currentWord.word;
		const currentIndex = state.counterReducer.counter;
		const lastWordIndex = currentSet.length-1;

		const checkAnswer = () =>{	
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
			<div className={"card"}>{currentWord[0]}</div>
			<input className={"exerciseInput"} placeholder={"write your response"}></input>
			<div className={"buttonBox"}>
				<Button className={"exerciseButton"} handleClick={checkAnswer}buttonName={"Check"}></Button>
			</div>
		</div>
	)
}