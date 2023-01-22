import LoginForm from '../Components/LoginForm.js';
import Navbar from '../Components/Navbar.js';

const mainStyles ={
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	width: "70%",
	height: "70%",
	marginLeft: "15%",
	padding: "1%"
}
const largeLogo ={
	backgroundColor: "pink",
	display: "flex",
	height: "85%",
	width: "50%",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	fontSize: "80px"
}
export default function LandingPage (){
	return(
		<div className={"landingPage"}>
			<main style={mainStyles}>
				<div style={largeLogo}>idiom</div>
				<LoginForm />
			</main>
			<Navbar>
				<div>logo here</div>
				<div>
					<p>link</p>
					<p>link</p>
					<p>link</p>
				</div>
			</Navbar>
		</div>
	)
}