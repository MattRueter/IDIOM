import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import Button from '../Button';

export const MultiChoiceExercise = () =>{
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