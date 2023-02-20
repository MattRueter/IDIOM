import { useSelector, useDispatch} from "react-redux"
import { wordLibrary } from "../Data/wordCollection";
import { folderSelected } from "../Reducers/folderReducer";
import { setSelected } from "../Reducers/setReducer"
import { getLabelsFromSet, filterSets } from "../Utility_functions/utilities"


export function DisplayFolders_Sets(){
	const state = useSelector((state) =>state);
	if(state.folderReducer.currentFolder === ""){
		return (
			<DisplayFolders />
		)
	}else{
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
	const folderContents = wordLibrary.filter(word => word.folder === state.folderReducer.currentFolder)
	const myLabels = folderContents.map(word => word.labels).flat()

	const mySets = myLabels.map((label,index) =>{
		return(
			<Set label={label} key={index} />
		)
	})
	return (
		<div className={"displayROW"}>
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
const Set = ({label}) =>{
	return (
		<div className={"set"}>
			<div className={".infoBox"}>{label}</div>
		</div>
	)
}