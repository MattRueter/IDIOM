import { useSelector, useDispatch} from "react-redux"
import { wordLibrary } from "../Data/wordCollection";
import { folderSelected } from "../Reducers/folderReducer";
import { setSelected } from "../Reducers/setReducer"
import { getLabelsFromSet, filterSets, removeDuplicates } from "../Utility_functions/utilities"


export function DisplayFolders_Sets(){
	const state = useSelector((state) =>state);
	if(state.viewReducer.currentView === "Show folders"){
		return (
			<DisplayFolders />
		)
	}else if(state.viewReducer.currentView === "Show sets"){
		return(
			<DisplaySets />
		)
	}
}

function DisplayFolders (){
	const state = useSelector((state) =>state);
	const myFolders =state.folderReducer.folders.map((folder,index)=>{
		return <Folder folderTitle={folder} key={index} />
	});
	return (
		<div className={"displayROW"}>
			{myFolders}
		</div>
	)	
}
function DisplaySets (){
	const state = useSelector((state) =>state);
	const dispatch = useDispatch()
	const folderContents = wordLibrary.filter(word => word.folder === state.folderReducer.currentFolder)
	const myLabels = removeDuplicates(folderContents.map(word => word.labels).flat())
	
	/////////////////////////////////////////////////////////////////////
	let labelArray = [];
	const chooseSets = (labelArray) => {
		const set = filterSets(labelArray,state.folderReducer.currentFolder)
		dispatch(setSelected(set))		
	}

	const createLabelArray = (label) => {
		labelArray.push(label)
		console.log(labelArray)
	}
	/////////////////////////////////////////////////////////////////////


	const mySets = myLabels.map((label,index) =>{
		return(
			<Set handleClick={()=>{createLabelArray(label)}}label={label} key={index} />
		)
	})

	return (
		<div className={"displayROW"}>
			<button onClick={()=>{chooseSets(labelArray)}}>Choose sets</button>
			{mySets}
		</div>
	)
}

const Folder = ({folderTitle}) =>{
	const dispatch = useDispatch();
	const state = useSelector((state) => state);

	const handleClick = () =>{
		dispatch(folderSelected(folderTitle))
	}
	return(
		<div onClick={handleClick} className={"folder"}>
			<div className={"folderTop"}>{folderTitle}</div>
			<div className={"folderBottom"}></div>
		</div>
	)
}
const Set = ({label,handleClick}) =>{
	return (
		<div onClick={handleClick}className={"set"}>
			<div className={".infoBox"}>{label}</div>
		</div>
	)
}