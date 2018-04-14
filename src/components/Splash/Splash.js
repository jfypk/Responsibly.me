import React, { Component } from 'react';
import '../../index.css';
import Header from './Header.js';
import Overview from './Overview.js';
import Companies from './Companies.js';
import Footer from './Footer.js';

class Splash extends Component {
	render(){
		return(
			<div className="Splash">
				<Header />
				<Overview />
				<Companies />
				<Footer />
        	</div>
			);
	}

}

export default Splash;