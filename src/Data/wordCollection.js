export const wordLibrary = [
	{l1:'pet',	l2:'mascota',	folder:'spanish', labels:[],labels:["basic","animals"]},
	{l1:'tiger',l2:'tigre',	folder:'spanish', labels:[],labels:["basic","animals","jungle"]},
	{l1:'fish',	l2:'pez',	folder:'spanish', labels:[],labels:["basic","animals","sea & ocean"]},
	{l1:'bear',	l2:'oso',	folder:'spanish', labels:[],labels:["basic","animals","fun"]},
	{l1:'bird',	l2:'pájaro',	folder:'spanish', labels:[],labels:["basic","animals","jungle"]},
	{l1:'snake',l2:'serpiente',	folder:'spanish', labels:[],labels:["basic","animals","mean"]},
	{l1:'dolphin',	l2:'delfín',	folder:'spanish', labels:[],labels:["basic","animals","sea & ocean"]},
	{l1:'elephant',	l2:'elefante',	folder:'spanish', labels:[],labels:["basic", "animals","nice"]},
	{l1:'monkey', 	l2:'mono',	folder:'spanish', labels:[],labels:["basic","animals","fun"]},
	{l1:'car', l2:'voiture',  folder:'french', labels:["basic"]},
	{l1:'window', l2:'fênetre',  folder:'french', labels:["basic"]},
	{l1:'bicycle', l2:'velo',  folder:'french', labels:["basic"]},
	{l1:'pen', l2:'stylo',  folder:'french', labels:["basic"]},
	{l1:'door', l2:'port',  folder:'french', labels:["basic"]},
	{l1:'dog', l2:'chien',  folder:'french', labels:["basic"]},
	{l1:'bread', l2:'brød',  folder:'Danish', labels:["basic"]},
	{l1:'apple', l2:'æble',  folder:'Danish', labels:["basic"]},
	{l1:'the apple', l2:'æblet',  folder:'Danish', labels:["basic"]},
	{l1:'boy', l2:'dreng',  folder:'Danish', labels:["basic"]},
	{l1:'girl', l2:'pige',  folder:'Danish', labels:["basic"]},
	{l1:'woman', l2:'kvinde',  folder:'Danish', labels:["basic"]},
	{l1:'man', l2:'mand',  folder:'Danish', labels:["basic"]},
	{l1:'table', l2:'mesa',   folder:'spanish', labels:["basic"]},
	{l1:'chair', l2:'silla',  folder:'spanish', labels:["basic"]},
	{l1:'bed', l2:'cama',   folder:'spanish', labels:["basic"]},
	{l1:'bookshelf', l2:'estantería',   folder:'spanish', labels:["basic"]},
	{l1:'lamp', l2:'lámpara',   folder:'spanish', labels:["basic"]},
	{l1:'armchair', l2:'sillón',  folder:'spanish', labels:["basic"]},
	{l1:'waste-basket', l2:'papelería',  folder:'spanish', labels:["basic"]},  
	{l1:'newspaper',	l2: 'avis',	folder: 'Danish', labels:["basic"]},
	{l1:'the newspaper',	l2: 'avisen',	folder: 'Danish', labels:["basic"]},
	{l1:'milk', l2: 'mælk', folder: 'Danish', labels:["basic"]},
	{l1:'beer', l2: 'øl',	folder: 'Danish', labels:["basic"]},
	{l1:'meat', l2: 'kød',	folder: 'Danish', labels:["basic"]},
]
function addWord(l1,l2,folder,labels,examples){
	const word = {
		l1:l1,
		l2:l2,
		folder:folder,
		labels:labels,
		examples:examples
	};
	wordLibrary.push(word)
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