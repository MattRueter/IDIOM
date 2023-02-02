import {Navbar, navbar} from '../Components/Navbar.js';
import {Menu, menuButtons} from '../Components/Menu.js';
import Folder from '../Components/Folder';

export default function Home() {
  return (
    <div className={"homePage"}>
      <Navbar />
      <div className={"container"}>
        <Menu buttonOptions={menuButtons}/>
        <Folder />
      </div>
    </div>
  );
}
