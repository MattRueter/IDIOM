import Button from '../components/Button.js';
import Link from 'next/link.js';

export default function LoginForm ({logo}) {
	return(
		<div id = 'loginContainer'>
			<form id = 'loginInputContainer'>
				<div className ='smLogo'></div>
				<input type = 'text' className = 'loginInput' id = 'user' minLength = '3' placeholder= "Username" required></input>
				<input type = 'text' className = 'loginInput' id = 'password' minLength ='7' placeholder = "Password" required></input>
				<Button className={"btnLink"}id ='signin' type = 'button' buttonName={"Sign in"}/>
				{/*will <try demo div> change to link which goes to dashboard*/}
                <Button className={"btnLink"} id="demo" type = 'button' buttonName={"Try Demo"} />
			</form>
		</div>
	)
}