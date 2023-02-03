import Button from './Button.js';

const menu ={
	borderRadius: "20px",
	height: "80vh",
	width: "10%",
	margin: "1%",
	display: "flex",
	flexDirection: "column",
	backgroundColor: "#c6d2e3"
}
export const menuButtons=["show sets", "show folders", "new set"];
export const exerciseMenuButtons=["matching","memory","respond","flip", "multiple-choice"]

export function Menu ({buttonOptions}){

	const buttons = buttonOptions.map((button) => {
		return (
			<Button action={button} key={buttonOptions.indexOf(button)}/>
		)
	});	

	return (
		<div style={menu} className={"Menu"}>
			<div className={"menuItems"}>{buttons}</div>
		</div>
	)
}