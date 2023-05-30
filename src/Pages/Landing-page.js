import LoginForm from '../Components/LoginForm.js';
import {Footer} from '../Components/Footer.js';
import {LandingPageIcon} from "../Images/svgImages.js";

export default function LandingPage() {
	return (
		<div className={"landingPage"}>
			<main className={"LandingPageMainContainer"}>				
				<LandingPageIcon />		
				<LoginForm />
			</main>
			<Footer />
		</div>
	)
}
