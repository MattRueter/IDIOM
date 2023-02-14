import {Navbar} from '../Components/Navbar.js';
import {Menu, menuButtons} from '../Components/Menu.js';
import {DisplayFolders, DisplaySets} from '../Components/FolderAndSetDisplay';
import { demoLibrary } from '../Data/library.js';


export default function Home() {
  return (
    <div className={"homePage"}>
      <Navbar />
      <div className={"container"}>
        <Menu buttonOptions={menuButtons}/>
        <DisplayFolders/>
        <DisplaySets />
      </div>
    </div>
  );
}
