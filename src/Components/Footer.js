export const footer ={
	display: "flex",
	justifyContent: "flex-start",
	alignItems: "flex-start",
	backgroundColor: "#090152",
	height: "12%",
	marginTop:"2%"
}
export function Footer ({content}){
	return (
		<nav style={footer}>
			<div className={"smLogo"}></div>
		</nav>
	)
}