import React from 'react'
import Nav from './Nav'
import Main from './Main'

const App = () => (
	<div className="container-fluid full-width">
		<Nav />
		<div className="row">
			<div className="col-md-12 text-center">
				<div className="bgcolor">
				<Main />
				</div>
			</div>
		</div>
	</div>
)

export default App
