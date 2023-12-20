import Link from 'next/link';
import Image from 'next/image';
import cardDeck from '../../public/cardDeck.svg';


export const navbar ={
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	backgroundColor: "#8ca8bfde",
	height: "80px",
	width:"100%"
}
export const contentContainer={
	display:"flex",
	justifyContent: "center",
	alignItems: "center",
	width: "25%",
	height: "90%",
	marginRight:"5%"
}

export function Navbar ({content}){
	return (
		<nav style={navbar}>
            <Link href="/">
                <Image
                    src={cardDeck}
                    alt="image of card deck"
                    height={100}
                    width={100}
                />
            </Link>
			<div style={contentContainer}>
                {/*
                    <Link to='/home' className={"link"}>Home</Link>
                    <Link to='/exercises' className={"link"}>Exercises</Link>

                */}
                <button>HOME</button>
                <button>Exercises</button>
			</div>
		</nav>
	)
}