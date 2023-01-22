export default function LoginForm () {
	return(
		<div id = 'loginContainer'>
		<form id = 'loginInputContainer'>
			<div id = 'logo'></div>
			<input type = 'text' class = 'loginInput' id = 'user' minlength = '3' placeholder= "Username" required></input>
			<input type = 'text' class = 'loginInput' id = 'password' minlength ='7' placeholder = "Password" required></input>
			<button id ='signin' type = 'button'>Sign In</button>
			<button id = 'signup' type ='button' >Sign Up</button>
		</form>
	</div>
	)
}