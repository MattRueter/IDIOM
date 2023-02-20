import { useSelector, useDispatch} from "react-redux"
import { wordLibrary } from "../Data/wordCollection";
import { folderSelected } from "../Reducers/folderReducer";
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
	return (
		<div className={"displayROW"}>
			<Set />
			<Set />
			<Set />
			<Set />
			<Set />
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
const Set = () =>{
	return (
		<div className={"set"}>
			<div className={".infoBox"}>TEXT</div>
		</div>
	)
}