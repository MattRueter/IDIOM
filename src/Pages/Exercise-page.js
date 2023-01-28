import {Menu, exerciseMenuButtons} from '../Components/Menu';
import {Navbar, navbar} from '../Components/Navbar.js';

export default function ExercisePage (){
	return (
		<div className={"exercisePage"}>
			<Navbar />
			<Menu buttonOptions={exerciseMenuButtons}/>
		</div>
	)
}