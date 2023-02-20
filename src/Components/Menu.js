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
export const menuButtons=["+ folder", "+ set", "+ word"];
export const exerciseMenuButtons=["flip", "multiple-choice", "respond", "matching", "memory"]

export function Menu ({handleClick,buttonOptions}){

	const buttons = buttonOptions.map((buttonName) => {
		return (
			<Button handleClick={handleClick}buttonName={buttonName} key={buttonOptions.indexOf(buttonName)}/>
		)
	});	

	return (
		<div style={menu} className={"Menu"}>
			<div className={"menuItems"}>{buttons}</div>
		</div>
	)
}