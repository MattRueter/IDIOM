import LoginForm from '../Components/LoginForm.js';
import {Footer} from '../Components/Footer.js';

export default function LandingPage() {
	return (
		<div className={"landingPage"}>
			<main className={"LandingPageMainContainer"}>
				<div className={"LandingPageLargeLogo"}>idiom</div>
				<LoginForm />
			</main>
			<Footer />
		</div>
	)
}