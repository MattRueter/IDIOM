import LoginForm from '../Components/LoginForm.js';
import {Footer} from '../Components/Footer.js';
import cardDeck from '../Images/cardDeck.svg';
import cardDeckRow from '../Images/cardDeckRow.svg';
import iconSimple from '../Images/iconSimple.svg';

export default function LandingPage() {
	return (
		<div className="landingPage">
			<nav style={{backgroundColor:"#090152",padding:"1%"}}>
				<div style={{width:"5%"}}>
					<img src={iconSimple}/>
				</div>
			</nav>
			<main>
			<section className={"LandingPageSection"}>				
				<div style={{width:"35%"}}>
					<img src={cardDeck} />
				</div>
				<LoginForm />
			</section>
			<section className={"LandingPageSection"}>
				<div style ={{width:"40%"}}>
					<img src={cardDeckRow} />
				</div>
				<div className="landingSectionCopy">
					<p>Use this app to do the things. You'll like it a lot because la la la la la la. As you continue to use it perhaps etc.. etc.. etc..</p>
					<p>Users have said... la la la la. Practice makes perfect... use this to practice. </p>
				</div>
			</section>
			</main>
			<Footer />
		</div>
	)
}
