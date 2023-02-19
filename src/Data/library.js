class Word {
    constructor(l1,l2,folder, label, example){
        this.l1 = l1;            //type: ""
        this.l2 = l2;            //type: ""
        this.folder = folder;    //type: ""
        this.labels = label;     //type:[]
        this.example = example   //type: ""
    };

    get word () { 
        return this.l1
    };
    get translation () {
        return this.l2
    };
    get myFolder () {
        return this.folder
    };
    get myLabels (){
        return this.labels
    };
    get myExample (){
        return this.example;
    };

    changeFolder (newFolder) { 
        this.folder = newFolder
    };
    addLabel (newLabel) {
        this.labels.push(newLabel)
    };
    removeLabel (labelToRemove) {
        this.labels = this.labels.filter(label => label !== labelToRemove)
    }
    editExample (string){
        this.example = string;
    }
}

class Library {
    constructor(){
        this.list =[]
        this.folders = []
    }
    get allWords (){
        return this.list;
    }

    createNewWord (l1,l2,folder,labels, example){
        const newWord = new Word(l1,l2,folder,labels, example);
        this.list.push(newWord);
    }
    getFolders (){
        this.list.forEach(word =>{
            !this.folders.includes(word.folder) ? this.folders.push(word.folder) : console.log("getting your folders.");
        });        
        return this.folders;
    }
    filterSets (labelsArray, folderName="all"){
        let folder;
        if(folderName ==="all"){
            folder =this.list;
        }else{
            folder= this.list.filter(word => word.folder===folderName);
        }
        const set = folder.filter((word) => {
           return word.labels.some(label => labelsArray.includes(label))
        });
        return set;
    }
}


//EXAMPLES

const demoLibrary = new Library()
demoLibrary.createNewWord( "book","libro", "spanish", ["basic", "leisure", "noun"],"I have that book.")
demoLibrary.createNewWord( "dog", "perro", "spanish", ["animals", "basic","fun","noun" ] )
demoLibrary.createNewWord( "cat", "gato", "spanish", ["animals", "basic", "mean","noun"] )
demoLibrary.createNewWord( "dog", "le chien", "french", ["animals", "basic", "fun","noun"])
demoLibrary.createNewWord( "cat", "la chat", "french", ["animals", "basic", "mean","noun"])
demoLibrary.createNewWord("stench","hediondez", "spanish", ["odd", "negative","smell","noun"],"Que hediondez hay.")
demoLibrary.createNewWord("to speechify", "discursear", "spanish", ["odd","academic","verb"])
demoLibrary.createNewWord( "to buzz about aimlessly", "zascandilear", "spanish", ["odd","negative","sarcastic","verb"],"Zascandileamos como dos torpes.")
demoLibrary.createNewWord("quick tempered person", "cascarrabias", "spanish", ["negative","odd","noun"])
