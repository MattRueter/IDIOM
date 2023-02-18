import {Navbar} from '../Components/Navbar.js';
import {Menu, menuButtons} from '../Components/Menu.js';
import {DisplayFolders, DisplaySets} from '../Components/FolderAndSetDisplay';
import { setSelected } from "../Reducers/setReducer";
import { useSelector, useDispatch } from 'react-redux';
const mySet = {
  l1:"test", 
  l2:"prueba", 
  folder:"spanish", 
  labels:["basic", "test"]
  }

export default function Home() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);
  return (
    <div className={"homePage"}>
        
        <button onClick={() => {
            dispatch(setSelected(mySet))
          }}>choose set
        </button>

      <Navbar />
      <div className={"container"}>        
        <Menu buttonOptions={menuButtons}/>
        <DisplayFolders/>
        <DisplaySets />
      </div>
    </div>
  );
}
