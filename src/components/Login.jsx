import React from 'react';
import { Link } from 'react-router-dom';
//import Forgot from 'Forgot';

class Login extends React.Component{
	onSubmit(e){
		e.preventDefault();

	// let user=this.refs.username.value;
	// let pass=this.refs.password.value;
	}
	render(){
		return(
			<div>
				<h4>Login</h4>
			<form className="form-horizontal" ref="loginForm" onSubmit={this.onSubmit}>
  <div className="form-group">
    <label className="col-sm-4 control-label">User Name</label>
    <div className="col-sm-4">
      <input type="text" className="form-control" ref="name" placeholder="User Name"/>
    </div>
  </div>

  <div className="form-group">
    <label className="col-sm-4 control-label">Password</label>
    <div className="col-sm-4">
      <input type="password" className="form-control" ref="password"  placeholder="Password"/>
    </div>
  </div>

  <div className="form-group">
    <div className="col-sm-offset-4 col-sm-4">
      <button type="submit" className="btn btn-primary">Login</button>
    </div>
  </div>

</form>
				<div className="text-center">
					<Link to={'/forgot'}>Forgot Password?</Link>&nbsp;&nbsp;
					<Link to={'/register'}>Create account</Link>
				</div>
			</div>
			);
	}
}

export default Login;
