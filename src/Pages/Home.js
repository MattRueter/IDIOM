import {Navbar} from '../Components/Navbar.js';
import {Menu, menuButtons} from '../Components/Menu.js';
import {DisplayFolders, DisplaySets} from '../Components/FolderAndSetDisplay';

import { useSelector, useDispatch } from 'react-redux';
import { select_set } from '../Actions/setActions.js';

export default function Home() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);
  return (
    <div className={"homePage"}>
        
        <button onClick={() => {
            dispatch(select_set())
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
