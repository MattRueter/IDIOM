import {Navbar, navbar} from '../Components/Navbar.js';
import Menu from '../Components/Menu.js';
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <div className={"homePage"}>
      <Navbar style={navbar}>
        <Link to='/' className={"link"}>Home</Link>
        <Link to='/login' className={"link"}>Login</Link>
      </Navbar>
      <Menu />
    </div>
  );
}
