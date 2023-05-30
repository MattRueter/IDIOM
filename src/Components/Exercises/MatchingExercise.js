export const MatchingExercise = () =>{
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