import { useSelector, useDispatch} from "react-redux"
import { folderSelected } from "../Reducers/folderReducer";

export function DisplayFolders (){
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
export function DisplaySets (){
	return (
		<div className={"displayROW"}>
			<Set />
			<Set />
			<Set />
			<Set />
			<Set />
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
	return(
		<div onClick={()=>{dispatch(folderSelected(folderTitle))}} className={"folder"}>
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