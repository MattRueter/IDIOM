export default function Button ({handleClick, buttonName, className}){
	return (
		<button className={className} onClick={()=>handleClick(buttonName)}>{buttonName}</button>
	)
}