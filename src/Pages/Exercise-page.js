import {Menu, exerciseMenuButtons} from '../Components/Menu';
import {Navbar, navbar} from '../Components/Navbar.js';
import {Exercise} from '../Components/Exercise';

export default function ExercisePage (){

	return (
		<div className={"exercisePage"}>
			<Navbar />
			<div className={"container"}>
				<Menu buttonOptions={exerciseMenuButtons}/>
				<Exercise />
			</div>
		</div>
	)
}