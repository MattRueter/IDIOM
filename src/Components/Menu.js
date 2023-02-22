import Button from './Button.js';


export const menuButtons=["Show folders","Show sets", "+ folder", "+ set", "+ word"];
export const exerciseMenuButtons=["flip", "multiple-choice", "respond", "matching", "memory"]

export function Menu ({handleClick,buttonOptions}){

	const buttons = buttonOptions.map((buttonName) => {
		return (
			<Button handleClick={handleClick}buttonName={buttonName} key={buttonOptions.indexOf(buttonName)}/>
		)
	});	

	return (
		<div className={"menu"} >
			<div className={"menuItems"}>{buttons}</div>
		</div>
	)
}