import {Menu, exerciseMenuButtons} from '../Components/Menu';
import {Navbar, navbar} from '../Components/Navbar.js';
import {Exercise} from '../Components/Exercises/Exercise';
import { Toolbar } from "../Components/Toolbar"
import { useSelector, useDispatch } from 'react-redux';
import { exerciseSelected } from '../Reducers/exerciseReducer';

export default function ExercisePage (){
	const state = useSelector((state) => state);
	const dispatch = useDispatch();
	const currentExercise  = state.exerciseReducer.exercise

	const handleClick = (exerciseType) => {
		dispatch(exerciseSelected(exerciseType))
	}
	return (
		<div className={"exercisePage"}>
			<Navbar />
			<Menu handleClick={handleClick}buttonOptions={exerciseMenuButtons}/>
			<Exercise currentExercise={currentExercise}/>
			<div className={"pushContainer"}></div>
		</div>
	)
}