
import { useEffect } from "react";
import {Navbar} from '../Components/Navbar.js';
import {Menu, menuButtons} from '../Components/Menu.js';
import { DisplayFolders_Sets } from '../Components/Folder_Sets_Display';
import { Toolbar } from "../Components/Toolbar"
import { viewSelected } from "../Reducers/viewReducer"
import { useSelector, useDispatch } from 'react-redux';
import { counterReset } from '../Reducers/counterReducer.js';

export default function Home() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleClick = (view) => {
		dispatch(viewSelected(view))
	}

  useEffect(()=>{
    dispatch(counterReset())
  },[])

  ////////////////////////--------------------------------------
  //a small playground to make calls to the server -> database and return the word object
  /*  
  const [ myWords, setMyWords ] = useState([]);  
  useEffect(() => {
    async function getWords (){

        const response = await fetch("http://localhost:5000/words");
        
        if(!response.ok){
          const message = `An error occurred: ${response.statusText}`;
          window.alert(message);
          return
        }
        
        const words = await response.json();
        setMyWords(words)
      
        console.log(`got them: ${myWords}`)

      
    }
    getWords()
    
    return;
},[myWords.length])
*/  
  ////////////////////////--------------------------------------


  return (
    <div className={"homePage"}>        
      <Navbar />
      <Menu handleClick={handleClick}buttonOptions={menuButtons}/>
      <DisplayFolders_Sets/>
      <div className={"pushContainer"}></div>
    </div>
  );
}
