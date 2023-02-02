export default function FolderAndSetDisplay (){
	return (
		<div className={"displayROW"}>
			<Folder />
		</div>
	)
}
const Folder = () =>{
	return(
		<div className={"folder"}>
			<div className={"folderTop"}></div>
			<div className={"folderBottom"}></div>
		</div>
	)
}