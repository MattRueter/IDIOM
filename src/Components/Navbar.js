import {Link} from 'react-router-dom';

export const navbar ={
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: "#8ca8bfde",
	height: "80px"
}
export const contentContainer={
	display:"flex",
	justifyContent: "center",
	alignItems: "center",
	width: "25%",
	height: "90%"
}

export function Navbar ({content}){
	return (
		<nav style={navbar}>
			<div className={"smLogo"}></div>
			<div style={contentContainer}>
				<Link to='/home' className={"link"}>Home</Link>
				<Link to='/login' className={"link"}>LOGIN</Link>
				<Link to='/exercises' className={"link"}>Exercises</Link>
			</div>
		</nav>
	)
}