import Button from './Button';

export function Exercise (){
	return (
		<div className={"exerciseContainer"}>
			<FlipExercise />
			<MultiChoiceExercise />
			<ResponseExercise />
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

const MultiChoiceExercise = () =>{
	return(
		<div className={"vocabCardsActivityDisplay"}>
			<div className={"card"}>TEXT</div>
			<div className={"buttonBox"}>
				<Button action={"option"}></Button>
				<Button action={"option"}></Button>
				<Button action={"option"}></Button>
				<Button action={"option"}></Button>
			</div>
			<div className={"buttonBox"}>
				<Button action={"<= Previous"}></Button> 
				<Button action={"Next =>"}></Button>
			</div>
		</div>
	)
}

const ResponseExercise = () =>{
	return(
		<div className={"vocabCardsActivityDisplay"}>
			<div className={"card"}>TEXT</div>
			<input></input>
			<div className={"buttonBox"}>
				<Button action={"<= Previous"}></Button> 
				<Button action={"Next =>"}></Button>
			</div>
		</div>
	)
}