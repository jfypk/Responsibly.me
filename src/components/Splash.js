import React, { Component } from 'react';
import '../index.css';

class Splash extends Component {
	render(){
		return(
			<div className="Splash">
				<div id="description">
		            <p>Corporations are more powerful than ever, and great power comes great responsibility.</p>
		            <p>Corporations need to do more to make sure their business practices are sustainable. They must help build a world where everyone is treated fairly and our environment is protected. It's time to use our collective purchasing power for good.</p>
		            <p><b>Inform</b> is a tool for consumers to use their buying power to influence the social responsibility initiatives of companies. It aggregates existing Corporate Social Responsibility (CSR) data on initiatives pertaining to <b>sustainable supply
		                chain practices</b>, <b>labor rights</b>, <b>energy usage</b> and more. </p>
		            <p>By staying informed, you can support companies that implement sound social responsibility practices and avoid those that don't. </p>
	        	</div>
		        <div id="instructions">
		            <p>To get started, click on the extension at the following stores:</p>
		            <ul>
		                <li><a target="_blank" rel="noopener noreferrer" href="http://www.nike.com">Nike</a></li>
		                <li><a target="_blank" rel="noopener noreferrer" href="http://www.adidas.com">Adidas</a></li>
		                <li><a target="_blank" rel="noopener noreferrer" href="http://puma.com">Puma</a></li>
		                <li><a target="_blank" rel="noopener noreferrer" href="https://www.underarmour.com/en-us/">Under Armour</a></li>
		            </ul>
		        </div>
        	</div>
			);
	}

}

export default Splash;