import { FlipExercise } from "./FlipExercise"
import { MultiChoiceExercise } from "./Multi-choice_Exercise";
import { ResponseExercise } from "./ResponseExercise"


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