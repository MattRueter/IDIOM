import Button from './Button';

export function Exercise (){
	return (
		<div className={"exerciseContainer"}>
			<FlipExercise />
			<MultiChoiceExercise />
			<ResponseExercise />
			<MemoryExercise />
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
			<input className={"exerciseInput"}></input>
			<div className={"buttonBox"}>
				<Button action={"<= Previous"}></Button> 
				<Button action={"Next =>"}></Button>
			</div>
		</div>
	)
}
const MemoryExercise = () =>{
	return(
		<div className={"vocabCardsActivityDisplayROW"}>
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
const Card = () =>{
	return (
		<div className={"smallCard"}>TEXT</div>
	)
}