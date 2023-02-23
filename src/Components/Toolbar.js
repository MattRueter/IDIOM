import { useSelector, useDispatch } from "react-redux"
//import Button from "./Button"
import { setSelected } from "../Reducers/setReducer"
import { filterSets } from "../Utility_functions/utilities"

export const Toolbar = () => {
	const state = useSelector((state) => state);
	const currentFolder = state.folderReducer.currentFolder;
	const makeSetFrom = state.setReducer.makeSetFrom;
	const dispatch = useDispatch()
	const chooseSets = () => {
		const set = filterSets(makeSetFrom, currentFolder)
		dispatch(setSelected(set))
	}
	const selectedLabels = makeSetFrom.map((label,index) => {
		return (
			<li key={index}>{label}</li>
		)
	});
	return (
		<div className={"toolbar"}>
			<h1>{currentFolder}</h1>
			<div id={"label_list"}>Make a set from...
				<ul >
					{selectedLabels}
				</ul>				
			</div>
			<div className={"toolbarButtonContainer"}>
				<button className={"menuButton"} onClick={() => { chooseSets(makeSetFrom) }}>Exercises</button>
				<button className={"menuButton"}>Edit wordlist</button>
			</div>
		</div>
	)
};