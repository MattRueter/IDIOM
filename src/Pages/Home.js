import {Navbar} from '../Components/Navbar.js';
import {Menu, menuButtons} from '../Components/Menu.js';
import { DisplayFolders_Sets } from '../Components/Folder_Sets_Display';
import { Toolbar } from "../Components/Toolbar"
import { viewSelected } from "../Reducers/viewReducer"
import { useSelector, useDispatch } from 'react-redux';

export default function Home() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleClick = (view) => {
		dispatch(viewSelected(view))
	}
  return (
    <div className={"homePage"}>        
      <Navbar />
      <Menu handleClick={handleClick}buttonOptions={menuButtons}/>
      <DisplayFolders_Sets/>
      <div className={"pushContainer"}></div>
    </div>
  );
}
