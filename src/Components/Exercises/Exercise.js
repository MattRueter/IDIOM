import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import Button from '../Button';
import { FlipExercise } from "./FlipExercise"

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

const MultiChoiceExercise = () =>{
	return(
		<div className={"display"}>
			<div className={"card"}>TEXT</div>
			<div className={"buttonBox"}>
				<Button className={"exerciseButton"}buttonName={"option"}></Button>
				<Button className={"exerciseButton"}  buttonName={"option"}></Button>
				<Button className={"exerciseButton"}  buttonName={"option"}></Button>
				<Button className={"exerciseButton"}  buttonName={"option"}></Button>
			</div>
			<div className={"buttonBox"}>
				<Button className={"exerciseButton"}  buttonName={"<= Previous"}></Button> 
				<Button className={"exerciseButton"}  buttonName={"Next =>"}></Button>
			</div>
		</div>
	)
}

const ResponseExercise = () =>{
	return(
		<div className={"display"}>
			<div className={"card"}>TEXT</div>
			<input className={"exerciseInput"} placeHolder={"write your response"}></input>
			<div className={"buttonBox"}>
				<Button className={"exerciseButton"}  buttonName={"<= Previous"}></Button> 
				<Button className={"exerciseButton"}  buttonName={"Next =>"}></Button>
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