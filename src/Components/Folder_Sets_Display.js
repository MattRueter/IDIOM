import { useSelector, useDispatch } from "react-redux"
import Button from "./Button"
import { wordLibrary } from "../Data/wordCollection";
import { folderSelected } from "../Reducers/folderReducer";
import { viewSelected } from "../Reducers/viewReducer"
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
	const folderContents = wordLibrary.filter(word => word.folder === currentFolder)
	const myLabels = removeDuplicates(folderContents.map(word => word.labels).flat())
	const mySets = myLabels.map((label, index) => {
		return (
			<Set label={label} key={index} />
		)
	})
	return (
		<div className={"displayROW"}>
			{mySets}
		</div>
	)
};

const Folder = ({ folderTitle }) => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state);

	const handleClick = () => {
		dispatch(folderSelected(folderTitle));
		dispatch(viewSelected("Show sets"))
	}
	return (
		<div onClick={handleClick} className={"folder"}>
			<div className={"folderTop"}>{folderTitle}</div>
			<div className={"folderBottom"}></div>
		</div>
	)
}
const Set = ({ label }) => {
	const state = useSelector((state) => state);
	const dispatch = useDispatch()
	const makeSetFrom = state.setReducer.makeSetFrom;
	const selectLabel = (label) => {
		makeSetFrom.includes(label) ? alert(`${label} already choosen`) : dispatch(labelSelected(label));
	}
	return (
		<div onClick={() => { selectLabel(label) }} className={"set"}>
			<div className={".infoBox"}>{label}</div>
		</div>
	)
};