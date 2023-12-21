import Link from 'next/link';
import Image from 'next/image';
import cardDeck from '../../public/cardDeck.svg';

export function Navbar ({content}){
	return (
		<nav className="flex justify-between items-center bg-blue-800" >
            <Link href="/">
                <Image
                    src={cardDeck}
                    alt="image of card deck"
                    height={100}
                    width={100}
                />
            </Link>
			<div className="flex  justify-between w-1/2" >
				<Link href="/">Home</Link>
				<Link href="/dashboard/folders">Folders</Link>
                <Link href="/dashboard/sets">Sets</Link>
				<Link href="/exercises">Exercises</Link>
			</div>
		</nav>
	)
}