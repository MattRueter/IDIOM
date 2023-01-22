export const navbar ={
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: "#8ca8bfde",
	height: "80px"
}
export const navBarFoot ={
	display: "flex",
	justifyContent: "flex-start",
	alignItems: "flex-start",
	backgroundColor: "#090152",
	height: "20%"
}

export function Navbar ({style}){
	return (
		<nav style={style}>
			<div className={"smLogo"}></div>
		</nav>
	)
}