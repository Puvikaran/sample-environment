import React from 'react';

class ChangePass extends React.Component {
	render() {
		return (
			<div>
				<h4>Change Password</h4>
				<form>
					<label>New Password:</label>
					<input type="password" ref="password" placeholder="Password" />
					<label>Confirm Password:</label>
					<input type="password" ref="passConfirm" placeholder="Re-type Password" />
					<button type="submit" className="button">Change</button>

				</form>

			</div>
		);
	}
}

export default ChangePass;
