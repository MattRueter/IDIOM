import {Link} from 'react-router-dom';

export const navbar ={
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	backgroundColor: "#8ca8bfde",
	height: "80px",
	width:"100%"
}
export const contentContainer={
	display:"flex",
	justifyContent: "center",
	alignItems: "center",
	width: "25%",
	height: "90%",
	marginRight:"5%"
}

export function Navbar ({content}){
	return (
		<nav style={navbar}>
			<Link to='/' className={"smLogo"}></Link>
			<div style={contentContainer}>
				<Link to='/home' className={"link"}>Home</Link>
				<Link to='/exercises' className={"link"}>Exercises</Link>
			</div>
		</nav>
	)
}
//Hide non implemented features for proudction build
//<Link to='/login' className={"link"}>LOGIN</Link>

