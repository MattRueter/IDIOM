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