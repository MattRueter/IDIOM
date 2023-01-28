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
export const menuButtons=["show sets", "show folders", "new set"];
export const exerciseMenuButtons=["matching","memory","respond","flip", "multiple-choice"]

export function Menu ({buttonOptions}){

	const buttons = buttonOptions.map((button) => {
		return (
			<Button action={button}/>
		)
	});	

	return (
		<div style={menu} className={"Menu"}>
			<div className={"menuItems"}>{buttons}</div>
		</div>
	)
}