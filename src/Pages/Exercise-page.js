import {Menu, exerciseMenuButtons} from '../Components/Menu';
import {Navbar, navbar} from '../Components/Navbar.js';
import {Exercise} from '../Components/Exercise';

export default function ExercisePage (){

	const handleClick = () => {
		console.log('clicked.')
	}
	return (
		<div className={"exercisePage"}>
			<Navbar />
			<div className={"container"}>
				<Menu handleClick={handleClick}buttonOptions={exerciseMenuButtons}/>
				<Exercise />
			</div>
		</div>
	)
}