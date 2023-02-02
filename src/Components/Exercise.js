import Button from './Button';

export function Exercise (){
	return (
		<div className={"exerciseContainer"}>
			<FlipExercise />
		</div>
	)
}

const FlipExercise = () =>{
	return(
		<div className={"vocabCardsActivityDisplay"}>
			<div className={"card"}>TEXT</div>
			<div className={"buttonBox"}>
				<Button action={"<= Previous"}></Button> 
				<Button action={"Next =>"}></Button>
			</div>
		</div>
	)
}