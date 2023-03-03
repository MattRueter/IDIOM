import { wordLibrary } from "../Data/wordCollection";

export function getLabelsFromSet (set){
	const labels = set.map(word => word.labels).flat();
	return labels;
};
export function filterSets (labelsArray, folderName="all"){
	let folder;
	let set;
	if(folderName==="all"){
		folder = wordLibrary
	}else{
		folder = wordLibrary.filter(word =>word.folder===folderName)
	}
	if(labelsArray){
		set = folder.filter((word) => {
			return word.labels.some(label => labelsArray.includes(label))
		 });
	}else{
		set = folder
	}
	return set;
}

export function getFolders (){
	let folders =[]
	wordLibrary.forEach(word =>{
		!folders.includes(word.folder) ? folders.push(word.folder) :console.log("getting your folders")
	})
	return folders;
}

export function removeDuplicates (myArray) {
	return myArray = myArray.filter((item,index) =>myArray.indexOf(item)===index)
}


export function suffleArray (myArray){
	let size = myArray.length;
	let newArray = [];
	let randomNumber = 0;
	while(newArray.length < size){
		randomNumber = Math.floor(Math.random()* size);
		if(newArray.includes(myArray[randomNumber])){
			
		}else if(!newArray.includes(myArray[randomNumber])){
			console.log(newArray,myArray[randomNumber],randomNumber)
			newArray.push(myArray[randomNumber])
			console.log(newArray,myArray[randomNumber])
		}
	}
	return newArray;
}
