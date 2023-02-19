export const wordLibrary = [];
function addWord(l1,l2,folder,labels,examples){
	const word = {
		l1:l1,
		l2:l2,
		folder:folder,
		labels:labels,
		examples:examples
	};
	wordLibrary.push(word)
	console.log(wordLibrary)
}



addWord( "book","libro", "spanish", ["basic", "leisure", "noun"],"I have that book.")
addWord( "dog", "perro", "spanish", ["animals", "basic","fun","noun" ] )
addWord( "cat", "gato", "spanish", ["animals", "basic", "mean","noun"] )
addWord( "dog", "le chien", "french", ["animals", "basic", "fun","noun"])
addWord( "cat", "la chat", "french", ["animals", "basic", "mean","noun"])
addWord("stench","hediondez", "spanish", ["odd", "negative","smell","noun"],"Que hediondez hay.")
addWord("to speechify", "discursear", "spanish", ["odd","academic","verb"])
addWord( "to buzz about aimlessly", "zascandilear", "spanish", ["odd","negative","sarcastic","verb"],"Zascandileamos como dos torpes.")
addWord("quick tempered person", "cascarrabias", "spanish", ["negative","odd","noun"])
