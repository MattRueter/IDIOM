import {Menu, exerciseMenuButtons} from '../Components/Menu';
import {Navbar, navbar} from '../Components/Navbar.js';
import {Exercise} from '../Components/Exercise';
import { useSelector, useDispatch } from 'react-redux';
import { exerciseSelected } from '../Reducers/exerciseReducer';

export default function ExercisePage (){
	const state = useSelector((state) => state);
	const dispatch = useDispatch();

	const handleClick = (exerciseType) => {
		dispatch(exerciseSelected(exerciseType))
		console.log(state)
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