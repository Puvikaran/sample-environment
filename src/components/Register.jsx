import React from 'react';
import { Link } from 'react-router-dom';

class Register extends React.Component {
	constructor(props){
		super(props);
		this.state={
			
		}
	}
	onSubmit(e) {
		e.preventDefault();

		/* let name = this.refs.userName.value;
		let email = this.refs.userEmail.value;
		let password = this.refs.password.value;
		let passConfirm = this.refs.passConfirm.value;

		console.log('name:', name);
		console.log('email:', email);
		console.log('password:', password);
		console.log('passConfirm:', passConfirm); */

	}
	render() {
		return (
			<div>
				<h4>Register</h4>
				<form className="form-horizontal" ref="regform" onSubmit={this.onSubmit}>
					<div className="form-group">
						<label className="col-sm-4 control-label">User Name</label>
						<div className="col-sm-4">
							<input type="text" className="form-control" ref="userName" placeholder="User Name" />
						</div>
					</div>
					<div className="form-group">
						<label className="col-sm-4 control-label">E-mail</label>
						<div className="col-sm-4">
							<input type="text" className="form-control" ref="userEmail" placeholder="E-mail" />
						</div>
					</div>
					<div className="form-group">
						<label className="col-sm-4 control-label">Password:</label>
						<div className="col-sm-4">
							<input type="password" className="form-control" ref="password" placeholder="Password" />
						</div>
					</div>
					<div className="form-group">
						<label className="col-sm-4 control-label">Confirm Password:</label>
						<div className="col-sm-4">
							<input type="password" className="form-control" ref="passConfirm" placeholder="Re-type Password" />
						</div>
					</div>
					<button type="submit" className="btn btn-primary">Register</button>
				</form>
				<div className="text-center"><Link to={'/login'}>Already have an account</Link></div>

			</div>
		);
	}
}

export default Register;
