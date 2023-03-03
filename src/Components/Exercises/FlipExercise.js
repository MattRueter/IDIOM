import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { currentWordChanged } from "../../Reducers/exerciseReducer";
import { 
	counterReset, 
	counterIncreased, 
	counterDecreased, 
	counterManuallySet  
} from "../../Reducers/counterReducer"
import Button from '../Button';

export const FlipExercise = () =>{
	const state = useSelector((state) => state);
	const dispatch = useDispatch();
	const currentIndex = state.counterReducer.counter;
	const currentSet = state.setReducer.set ? state.setReducer.set : [{l1:"No set selected", l2:"Choose a set by selecting labels within one of your folders."}]	
	const toggledLanguage =state.exerciseReducer.toggledLanguage;
	const currentWord = state.exerciseReducer.currentWord.word;
	const [ flipped, setFlipped ] =useState("");
	const [ index, setIndex ] = useState(0)
	const lastWordIndex = currentSet.length -1;

	useEffect(() => {
		dispatch(currentWordChanged(currentSet[currentIndex]));
	},[ toggledLanguage, currentIndex ]);
	
	useEffect(() => {
		const resetFlip = setTimeout(() => {
			setFlipped("");
		},800);
		return () => clearTimeout(resetFlip)
	},[flipped]);
	
	const flipCard = (e) => {
		setFlipped("perspective(500px) rotateX(360deg)");
		index === 0 ? setIndex(1) : setIndex(0);
	}
	const nextCard = () =>{
		setIndex(0)
		if(lastWordIndex > 0){
			if(currentIndex < lastWordIndex){
				dispatch(counterIncreased());
			}else if(currentIndex === lastWordIndex){
				dispatch(counterReset())
			}
		}
	};
	const prevCard = () =>{
		setIndex(0)
		if(lastWordIndex > 0){
			if(currentIndex > 0){
				dispatch(counterDecreased());
			}else if(currentIndex === 0){
				dispatch(counterManuallySet(lastWordIndex))
			}
		}
	};
	
	return(
		<div className={"display"}>
			<div 
				className={"card"} 
				style={{transform:flipped}}
				onClick={flipCard}>
				{currentWord[index]}
			</div>
			<div className={"buttonBox"}>
				<Button className={"exerciseButton"} handleClick={prevCard} buttonName={"Previoius"}></Button> 
				<Button className={"exerciseButton"} handleClick={nextCard} buttonName={"Next"}></Button>
			</div>
		</div>
	)
}