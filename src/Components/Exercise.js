import { useState } from "react";
import { useSelector } from 'react-redux';
import Button from './Button';

export function Exercise ({currentExercise}){
	switch(currentExercise){
		case "flip":
			return(<FlipExercise />);
		case "matching":
			return(<MatchingExercise />);
		case "multiple-choice":
			return(<MultiChoiceExercise />);
		case "respond":
			return(<ResponseExercise />);
		case "memory":
			return(<MemoryExercise />);
		default:
			return(<FlipExercise />);
	}
}

const FlipExercise = () =>{
	const [ counter, setCounter ] =useState(0)
	const state = useSelector((state) => state);
	
	const currentSet = state.setReducer.set;	
	const lastWord = currentSet.length -1;
	const next = "Next";
	const previous = "Previous";


	const changeCard = (command) =>{
		if(counter > 0 && counter < lastWord){
			command === next ? setCounter(counter + 1) : setCounter(counter - 1);
		}else if(counter === 0) {
			command === next ? setCounter(counter + 1) : setCounter(lastWord);
		}else if(counter === lastWord){
			command === next ? setCounter( 0 ) : setCounter(counter - 1);
		}
	}
	const flipCard = (e) => {
		e.target.style.transform = "perspective(500px) rotateX(360deg)";
		setTimeout(() => {
			e.target.style.transform = "";
		  },800)
	}
	return(
		<div className={"display"}>
			<div className={"card"} onClick={flipCard}>{currentSet[counter].l1}</div>
			<div className={"buttonBox"}>
				<Button handleClick={changeCard} buttonName={previous}></Button> 
				<Button handleClick={changeCard} buttonName={next}></Button>
			</div>
		</div>
	)
}

const MultiChoiceExercise = () =>{
	return(
		<div className={"display"}>
			<div className={"card"}>TEXT</div>
			<div className={"buttonBox"}>
				<Button buttonName={"option"}></Button>
				<Button buttonName={"option"}></Button>
				<Button buttonName={"option"}></Button>
				<Button buttonName={"option"}></Button>
			</div>
			<div className={"buttonBox"}>
				<Button buttonName={"<= Previous"}></Button> 
				<Button buttonName={"Next =>"}></Button>
			</div>
		</div>
	)
}

const ResponseExercise = () =>{
	return(
		<div className={"display"}>
			<div className={"card"}>TEXT</div>
			<input className={"exerciseInput"}></input>
			<div className={"buttonBox"}>
				<Button buttonName={"<= Previous"}></Button> 
				<Button buttonName={"Next =>"}></Button>
			</div>
		</div>
	)
}
const MemoryExercise = () =>{
	return(
		<div className={"displayROW"}>
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />			
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />			
		</div>		
	)
}
const MatchingExercise = () =>{
	return(
		<div className={"displayROW"}>
			<div className={"CardColumn"}>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<div className={"CardColumn"}>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	)
}

const Card = () =>{
	return (
		<div className={"smallCard"}>TEXT</div>
	)
}