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
			errors: {}
		}
	},

	handleSignUp(event) {

		event.preventDefault();

		var useremail = $(event.target).find("[name=email]").val();
		var userpassword = $(event.target).find("[name=password]").val();

		var errors = {};

		if (!email) {
			errors.email = "Email Required";
		}
		if(!password) {
			errors.password = "Password Required";
		}

		this.setState({
			errors: errors
		})

		Accounts.createUser({
			email: useremail,
			password: userpassword
		})

		FlowRouter.go('Login');
	},
	render() {

		return(
			<div className="container">
				<div className="row">
					<h1 className="text-center">Signup</h1>
					<form onSubmit={this.handleSignUp}>
						<C.AuthErrors errors={this.state.errors} />
						<C.FormInput hasError={!!this.state.errors.email} name="Email" type="text" label="Email" />
						<C.FormInput hasError={!!this.state.errors.password} name="Password" type="password" label="Password" />
						<input type="submit" className="btn btn-default"/>
					</form>
				</div>
			</div>
		)

	}
})
