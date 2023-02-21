import { useState } from "react";
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
	const [ labelArray, setLabelArray ] = useState([])
	const state = useSelector((state) =>state);
	const currentFolder =state.folderReducer.currentFolder;
	const dispatch = useDispatch()
	const folderContents = wordLibrary.filter(word => word.folder === currentFolder)
	const myLabels = removeDuplicates(folderContents.map(word => word.labels).flat())	

	const chooseSets = (labelArray) => {
		const set = filterSets(labelArray,state.folderReducer.currentFolder)
		dispatch(setSelected(set))		
	}

	const createLabelArray = (label) => {
		setLabelArray([...labelArray,label])
	}

	const mySets = myLabels.map((label,index) =>{
		return(
			<Set handleClick={()=>{createLabelArray(label)}}label={label} key={index} />
		)
	})
	const selectedLabels = labelArray.map((label,index)=>{
		if(labelArray.length > 0){
			return(
				<ul>
					<li>{label}</li>
				</ul>
			)
		}
	});

	return (
		<div className={"displayROW"}>
			<div className={"toolbar"}>
				<h1>{currentFolder}</h1>
				{selectedLabels}
				<button onClick={()=>{chooseSets(labelArray)}}>Choose sets</button>
			</div>
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