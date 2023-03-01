import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { counterReset, counterIncreased, counterDecreased, counterManuallySet  } from "../../Reducers/counterReducer"
import Button from '../Button';

export const FlipExercise = () =>{
	const state = useSelector((state) => state);
	const dispatch = useDispatch();
	const currentIndex = state.counterReducer.counter;
	const currentSet = state.setReducer.set ? state.setReducer.set : [{l1:"No set selected", l2:"Choose a set by selecting labels within one of your folders."}]	
	const [ flipped, setFlipped ] =useState("");
	const [ translate, setTranslate ] = useState("l1")
	
	const lastWordIndex = currentSet.length -1;
	const next = "Next";
	const previous = "Previous";
	
	useEffect(() => {
		const resetFlip = setTimeout(() => {
			setFlipped("");
		},800);
		return () => clearTimeout(resetFlip)
	},[flipped]);
	
	const changeCard = (command) =>{
		setTranslate("l1");
		if(lastWordIndex > 0){
			if(currentIndex > 0 && currentIndex < lastWordIndex){
				command === next ? dispatch(counterIncreased()) : dispatch(counterDecreased());
			}else if(currentIndex === 0) {
				command === next ? dispatch(counterIncreased()) : dispatch(counterManuallySet(lastWordIndex));
			}else if(currentIndex === lastWordIndex){
				command === next ? dispatch(counterReset()) : dispatch(counterDecreased());
			}
		}
	}

	const flipCard = (e) => {
		setFlipped("perspective(500px) rotateX(360deg)");
		translate === "l1" ? setTranslate("l2") : setTranslate("l1");
	}

	return(
		<div className={"display"}>
			<div className={"card"} style={{transform:flipped}}onClick={flipCard}>{currentSet[currentIndex][translate]}</div>
			<div className={"buttonBox"}>
				<Button className={"exerciseButton"} handleClick={changeCard} buttonName={previous}></Button> 
				<Button className={"exerciseButton"} handleClick={changeCard} buttonName={next}></Button>
			</div>
		</div>
	)
}