import Button from '../Components/Button.js';
import {Link} from 'react-router-dom';

export default function LoginForm ({logo}) {
	return(
		<div id = 'loginContainer'>
			<form id = 'loginInputContainer'>
				<div className ='smLogo'></div>
				<input type = 'text' className = 'loginInput' id = 'user' minLength = '3' placeholder= "Username" required></input>
				<input type = 'text' className = 'loginInput' id = 'password' minLength ='7' placeholder = "Password" required></input>
				<Button className={"btnLink"}id ='signin' type = 'button' buttonName={"Sign in"}/>
				<Link to='/home' className="btnLink">
					Try Demo
				</Link>
			</form>
		</div>
	)
}