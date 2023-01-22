import Button from './Button.js';

const menu ={
	borderRadius: "20px",
	height: "100vh",
	width: "10%",
	marginLeft: "3%",
	display: "flex",
	flexDirection: "column",
	backgroundColor: "whitesmoke"
}

export default function Menu (){
	return (
		<div style={menu} className={"Menu"}>
			<div className={"menuItems"}>
			<Button action={"show sets"}/>
			<Button action={"show folders"}/>
			<Button action={"new set"}/>
			</div>
		</div>
	)
}