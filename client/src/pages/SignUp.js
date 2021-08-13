import '../App.css'

export default function Signup() {

	return (
		<div>
			<h1>Sign Up</h1>
			<form method="POST" action="/api/create_new_user">
				<label for="username">Username: </label>
				<input type="text" id="username" name="username" /><br />
				<label for="password">Password: </label>
				<input type="password" id="password" name="password" /><br />
				<button type="submit">Submit</button>
			</form>
		</div>
	);

}
