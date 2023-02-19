import Button from './Button';

export function Exercise (){
	return (
		<div>
			<FlipExercise />
			<MultiChoiceExercise />
			<ResponseExercise />
			<MemoryExercise />
			<MatchingExercise />
		</div>
	)
}

const FlipExercise = () =>{
	return(
		<div className={"display"}>
			<div className={"card"}>TEXT</div>
			<div className={"buttonBox"}>
				<Button buttonName={"<= Previous"}></Button> 
				<Button buttonName={"Next =>"}></Button>
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