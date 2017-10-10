import React from 'react';

class Forgot extends React.Component{
	onSubmit(e){
		e.preventDefault();
	}
	render(){
		return(
			<div>
				<h4>Forgot Password</h4>
	<form className="form-horizontal" ref="forgotForm" onSubmit={this.onSubmit}>
  <div className="form-group">
    <label className="col-sm-4 control-label">E-mail</label>
    <div className="col-sm-4">
      <input type="text" className="form-control" ref="userEmail" placeholder="E-mail"/>
    </div>
  </div>

  <div className="form-group">
    <div className="col-sm-offset-4 col-sm-4">
      <button type="submit" className="btn btn-primary">Submit</button>
    </div>
  </div>

</form>
</div>
);
	}
}

export default Forgot;
