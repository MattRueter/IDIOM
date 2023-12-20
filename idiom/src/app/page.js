import Image from 'next/image';
import LoginForm from '@/components/LoginForm';
import { Footer } from '@/components/Footer';
import cardDeck from '../../public/cardDeck.svg';
import cardDeckRow from '../../public/cardDeckRow.svg'
import iconSimple from '../../public/iconSimple.svg';


export default function Home() {
	return (
		<div className="landingPage">
			<nav style={{backgroundColor:"#090152",padding:"1%"}}>
				<div style={{width:"5%"}}>
					<Image
						src={iconSimple}
						alt="idiom logo"
						height={100}
						width={100}
					/>
					
				</div>
			</nav>
			<main>
			<section className={"LandingPageSection"}>				
				<div style={{width:"35%"}}>
					<Image
						src={cardDeck}
						alt="idiom logo"
						height={400}
						width={400}
					/>
				</div>
				<LoginForm />
			</section>
			<section className={"LandingPageSection"}>
				<div style ={{width:"40%"}}>
					<Image
						src={cardDeckRow}
						alt="idiom logo"
						height={300}
						width={300}
					/>
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

