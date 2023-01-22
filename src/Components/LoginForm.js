export default function LoginForm () {
	return(
		<div id = 'loginContainer'>
		<form id = 'loginInputContainer'>
			<div id = 'logo'>Logo here:</div>
			<input type = 'text' className = 'loginInput' id = 'user' minLength = '3' placeholder= "Username" required></input>
			<input type = 'text' className = 'loginInput' id = 'password' minLength ='7' placeholder = "Password" required></input>
			<button id ='signin' type = 'button'>Sign In</button>
			<button id ='signin' type = 'button'>Try Demo</button>
		</form>
	</div>
	)
}