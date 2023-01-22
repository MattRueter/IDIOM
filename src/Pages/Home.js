import {Navbar, navbar} from '../Components/Navbar.js';
import Menu from '../Components/Menu.js';

export default function Home() {
  return (
    <div className={"homePage"}>
      <Navbar style={navbar} />
      <Menu />
    </div>
  );
}
