import {Navbar} from '../Components/Navbar.js';
import {Menu, menuButtons} from '../Components/Menu.js';
import {DisplayFolders, DisplaySets} from '../Components/FolderAndSetDisplay';
import { setSelected } from "../Reducers/setReducer";
import { useSelector, useDispatch } from 'react-redux';
import { wordLibrary } from "../Data/wordCollection";
import { filterSets } from '../Utility_functions/utilities';

const setA = wordLibrary
const setB = filterSets(["odd"], "spanish");
const setC = filterSets(["basic"],"french")


export default function Home() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);

  return (
    <div className={"homePage"}>
        
        <button onClick={() => {dispatch(setSelected(setA))}}>All words</button>
        <button onClick={() => {dispatch(setSelected(setB))}}>choose odd-Spanish</button>
        <button onClick={() => {dispatch(setSelected(setC))}}>choose basic-French</button>

      <Navbar />
      <div className={"container"}>        
        <Menu buttonOptions={menuButtons}/>
        <DisplayFolders/>
      </div>
    </div>
  );
}
