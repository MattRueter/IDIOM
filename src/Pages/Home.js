import {Navbar} from '../Components/Navbar.js';
import {Menu, menuButtons} from '../Components/Menu.js';
import { DisplayFolders_Sets } from '../Components/FolderAndSetDisplay';
import { viewSelected } from "../Reducers/viewReducer"
import { useSelector, useDispatch } from 'react-redux';

export default function Home() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);

  const handleClick = (view) => {
		dispatch(viewSelected(view))
	}

  return (
    <div className={"homePage"}>        
      <Navbar />
      <div className={"container"}>        
        <Menu handleClick={handleClick}buttonOptions={menuButtons}/>
        <DisplayFolders_Sets/>
      </div>
    </div>
  );
}
