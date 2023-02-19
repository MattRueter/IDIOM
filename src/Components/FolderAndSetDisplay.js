import { useSelector, useDispatch} from "react-redux"
import { folderAdded } from "../Reducers/folderReducer";

export function DisplayFolders (){
	const state = useSelector((state) =>state);
	const myFolders =state.folderReducer.folders.map((folder,index)=>{
		return <Folder folderTitle={folder} key={index}/>
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

export const Folder = ({folderTitle}) =>{
	return(
		<div className={"folder"}>
			<div className={"folderTop"}>{folderTitle}</div>
			<div className={"folderBottom"}></div>
		</div>
	)
}
export const Set = () =>{
	return (
		<div className={"set"}>
			<div className={".infoBox"}>TEXT</div>
		</div>
	)
}