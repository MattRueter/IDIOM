import { useSelector, useDispatch } from "react-redux"
import Button from "./Button"
import { wordLibrary } from "../Data/wordCollection";
import { folderSelected } from "../Reducers/folderReducer";
import { setSelected, labelSelected } from "../Reducers/setReducer"
import { filterSets, removeDuplicates } from "../Utility_functions/utilities"


export function DisplayFolders_Sets() {
	const state = useSelector((state) => state);
	if (state.viewReducer.currentView === "Show folders") {
		return (
			<DisplayFolders />
		)
	} else if (state.viewReducer.currentView === "Show sets") {
		return (
			<DisplaySets />
		)
	}
}

function DisplayFolders() {
	const state = useSelector((state) => state);
	const myFolders = state.folderReducer.folders.map((folder, index) => {
		return <Folder folderTitle={folder} key={index} />
	});
	return (
		<div className={"displayROW"}>
			{myFolders}
		</div>
	)
}

function DisplaySets() {
	const state = useSelector((state) => state);
	const currentFolder = state.folderReducer.currentFolder;
	const makeSetFrom = state.setReducer.makeSetFrom;
	const dispatch = useDispatch()
	const folderContents = wordLibrary.filter(word => word.folder === currentFolder)
	const myLabels = removeDuplicates(folderContents.map(word => word.labels).flat())

	const chooseSets = () => {
		const set = filterSets(makeSetFrom, currentFolder)
		dispatch(setSelected(set))
	}
	const selectLabel = (label) => {
		makeSetFrom.includes(label) ? alert(`${label} already choosen`) : dispatch(labelSelected(label))
	}
	const mySets = myLabels.map((label, index) => {
		return (
			<Set handleClick={selectLabel} label={label} key={index} />
		)
	})

	return (
		<div className={"displayROW"}>
			<Toolbar chooseSets={chooseSets} />
			{mySets}
		</div>
	)
}

const Folder = ({ folderTitle }) => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state);

	const handleClick = () => {
		dispatch(folderSelected(folderTitle))
	}
	return (
		<div onClick={handleClick} className={"folder"}>
			<div className={"folderTop"}>{folderTitle}</div>
			<div className={"folderBottom"}></div>
		</div>
	)
}
const Set = ({ label, handleClick }) => {
	return (
		<div onClick={() => { handleClick(label) }} className={"set"}>
			<div className={".infoBox"}>{label}</div>
		</div>
	)
}
const Toolbar = ({ chooseSets }) => {
	const state = useSelector((state) => state);
	const currentFolder = state.folderReducer.currentFolder;
	const makeSetFrom = state.setReducer.makeSetFrom;

	const selectedLabels = makeSetFrom.map(label => {
		return (
			<li>{label}</li>
		)
	});
	return (
		<div className={"toolbar"}>
			<h1>{currentFolder}</h1>
			<button className={"toolbarButton"} buttonName={"Choose a Set from the labels below"} onClick={() => { chooseSets(makeSetFrom) }}>Choose sets </button>
			<ul id={"label_list"}>
				{selectedLabels}
			</ul>
		</div>
	)
}