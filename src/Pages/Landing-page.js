import LoginForm from '../Components/LoginForm.js';
import {Footer} from '../Components/Footer.js';

const mainStyles = {
	display: "flex",
	justifyContent: "space-evenly",
	alignItems: "center",
	width: "80%",
	height: "100%",
	marginLeft: "5%",
	padding: "1%"
}
const largeLogo = {
	backgroundColor: "#22187e",
	color: "white",
	display: "flex",
	height: "75%",
	width: "60%",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	fontSize: "80px"
}
export default function LandingPage() {
	return (
		<div className={"landingPage"}>
			<main style={mainStyles}>
				<div style={largeLogo}>idiom</div>
				<LoginForm />
			</main>
			<Footer />
		</div>
	)
}