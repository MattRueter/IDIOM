import {Navbar, navbar} from '../Components/Navbar.js';
import {Menu, menuButtons} from '../Components/Menu.js';

export default function Home() {
  return (
    <div className={"homePage"}>
      <Navbar />
      <Menu buttonOptions={menuButtons}/>
    </div>
  );
}
