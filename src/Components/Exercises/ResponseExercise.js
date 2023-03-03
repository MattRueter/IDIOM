
import Button from '../Button';

export const ResponseExercise = () =>{
	return(
		<div className={"display"}>
			<div className={"card"}>TEXT</div>
			<input className={"exerciseInput"} placeholder={"write your response"}></input>
			<div className={"buttonBox"}>
				<Button className={"exerciseButton"}  buttonName={"<= Previous"}></Button> 
				<Button className={"exerciseButton"}  buttonName={"Next =>"}></Button>
			</div>
		</div>
	)
}