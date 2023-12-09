import logo from '../Images/logo.svg';

export const footer ={
	display: "flex",
	justifyContent: "flex-start",
	alignItems: "flex-start",
	backgroundColor: "#090152",

	marginTop:"2%"
}
export function Footer ({content}){
	return (
		<nav style={footer}>
			<div style={{width:"20%"}}>
				<img src={logo} />
			</div>
		</nav>
	)
}