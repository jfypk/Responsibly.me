import React, { Component } from 'react';
import '../index.css'; 

class MissingCompany extends Component {
	render() {
		return(
			<div className="MissingCompany">
				<h2>Missing data!</h2>
				<p>Sorry, but Inform does not have data on this company.</p>
				<p>It could be that this data is not publicly available. Reach out to this company through email or Twitter to demand transparency! Help us make this world a better place.</p>
				<p>For more help, please contact us at info@inform.cc</p>
			</div>
			);
	}
}

export default MissingCompany