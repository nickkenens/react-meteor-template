C.UserSignup = React.createClass({
	mixins: [
		ReactMeteorData
	],

	getMeteorData() {
		return {

		}
	},

	getInitialState() {
		return {
			errors: {},
			email: '',
			password: ''
		}
	},

	onEmailChange(event) {

		this.setState({email: event.target.value});
		console.log(this.state.email);
	},

	onPassChange(event) {
		this.setState({password: event.target.value});
		console.log(this.state.password);

	},

	handleSignUp(event) {

		event.preventDefault();

		var errors = {};

		if (this.state.email === "") {
			errors.email = "Email Required";
		}
		if(this.state.password === "") {
			errors.password = "Password Required";
		}

		this.setState({
			errors: errors
		})

		Accounts.createUser({
			email: this.state.email,
			password: this.state.password
		},(err) => {
			console.log(err);
		})

		FlowRouter.go('Home');
	},
	render() {

		return(
			<div className="container">
				<div className="row">
					<h1 className="text-center">Signup</h1>
					<form onSubmit={this.handleSignUp}>
						<C.AuthErrors errors={this.state.errors} />
						<C.FormInput hasError={!!this.state.errors.email} onKeyUp={this.onEmailChange} value={this.state.email} name="Email" type="text" label="Email"/>
						<C.FormInput hasError={!!this.state.errors.password} onKeyUp={this.onPassChange} value={this.state.password} name="Password" type="password" label="Password"/>
						<input type="submit" className="btn btn-default"/>
					</form>
				</div>
			</div>
		)

	}
})
