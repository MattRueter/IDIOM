export function DisplayFolders (){
	return (
		<div className={"displayROW"}>
			<Folder />
			<Folder />
			<Folder />
			<Folder />
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

export const Folder = () =>{
	return(
		<div className={"folder"}>
			<div className={"folderTop"}>TEXT</div>
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