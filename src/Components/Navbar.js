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
export const contentContainer={
	display:"flex",
	justifyContent: "center",
	alignItems: "center",
	width: "25%",
	height: "90%",
}

export function Navbar ({style, content}){
	return (
		<nav style={style}>
			<div className={"smLogo"}></div>
			<div style={contentContainer}>{content}</div>
		</nav>
	)
}