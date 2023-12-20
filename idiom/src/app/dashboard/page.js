import { Navbar } from "@/components/Navbar";
import { Menu } from "@/components/Menu";


const menuButtons=["Show folders","Show sets"];
export default function Dashboard () {
    //const state = useSelector((state) => state);
    //const dispatch = useDispatch();
    //const handleClick = (view) => {
    //      dispatch(viewSelected(view))
    //  }
  
    //useEffect(()=>{
    //  dispatch(counterReset())
    //},[])
  
    //temp handleclick
    const handleClick =() => {
        console.log("hello from Dashboard menu.")
    }
    return (
      <div className={"homePage"}>        
        <Navbar />
        <Menu handleClick={handleClick}buttonOptions={menuButtons}/>
        <h1>Folders and Sets go here.</h1>
        {/**
            <DisplayFolders_Sets/>
         */}
        <div className={"pushContainer"}></div>
      </div>
    );
  }