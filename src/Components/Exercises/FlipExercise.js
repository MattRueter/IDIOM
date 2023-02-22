import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import Button from '../Button';

export const FlipExercise = () =>{
	const [ counter, setCounter ] =useState(0);
	const [ flipped, setFlipped ] =useState("");
	const state = useSelector((state) => state);
	const currentSet = state.setReducer.set ? state.setReducer.set : [{l1:"No set selected", l2:"Choose a set by selecting labels within one of your folders."}]	
	const [ translate, setTranslate ] = useState("l1")
	
	const lastWord = currentSet.length -1;
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
		if(counter > 0 && counter < lastWord){
			command === next ? setCounter(counter + 1) : setCounter(counter - 1);
		}else if(counter === 0) {
			command === next ? setCounter(counter + 1) : setCounter(lastWord);
		}else if(counter === lastWord){
			command === next ? setCounter( 0 ) : setCounter(counter - 1);
		}
	}

	const flipCard = (e) => {
		setFlipped("perspective(500px) rotateX(360deg)");
		translate === "l1" ? setTranslate("l2") : setTranslate("l1");
	}

	return(
		<div className={"display"}>
			<div className={"card"} style={{transform:flipped}}onClick={flipCard}>{currentSet[counter][translate]}</div>
			<div className={"buttonBox"}>
				<Button handleClick={changeCard} buttonName={previous}></Button> 
				<Button handleClick={changeCard} buttonName={next}></Button>
			</div>
		</div>
	)
}