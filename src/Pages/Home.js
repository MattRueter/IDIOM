import {Navbar} from '../Components/Navbar.js';
import {Menu, menuButtons} from '../Components/Menu.js';
import {DisplayFolders, DisplaySets} from '../Components/FolderAndSetDisplay';
import { setSelected } from "../Reducers/setReducer";
import { useSelector, useDispatch } from 'react-redux';
import { wordLibrary } from "../Data/wordCollection";
const setA = wordLibrary;
const setB = [{l1:"b",l2:"B", folder:"testB",labels:["testing"]}]
const setC = [{l1:"c",l2:"C", folder:"testC",labels:["testing"]}]


export default function Home() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);

  return (
    <div className={"homePage"}>
        
        <button onClick={() => {dispatch(setSelected(setA))}}>choose basic-Spanish</button>
        <button onClick={() => {dispatch(setSelected(setB))}}>choose odd-Spanish</button>
        <button onClick={() => {dispatch(setSelected(setC))}}>choose basic-French</button>

      <Navbar />
      <div className={"container"}>        
        <Menu buttonOptions={menuButtons}/>
        <DisplayFolders/>
        <DisplaySets />
      </div>
    </div>
  );
}
