import {Navbar, navbar} from '../Components/Navbar.js';
import Menu from '../Components/Menu.js';
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <div className={"homePage"}>
      <Navbar 
        style={navbar} 
        content={<Link to='/' className={"link"}>Home</Link>}
      />
      <Menu />
    </div>
  );
}
