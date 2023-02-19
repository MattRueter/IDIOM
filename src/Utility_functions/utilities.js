import { wordLibrary } from "../Data/wordCollection";

export function filterSets (labelsArray, folderName="all"){
	let folder;
	if(folderName==="all"){
		folder = wordLibrary
	}else{
		folder = wordLibrary.filter(word =>word.folder===folderName)
	}
	const set = folder.filter((word) => {
		return word.labels.some(label => labelsArray.includes(label))
	 });
	
	console.log("choosing sets.")
	return set;
}