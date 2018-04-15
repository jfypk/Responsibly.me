import React, { Component } from 'react';
import '../../index.css';

class Overview extends Component {
    render() {
        return(
            <div className="Overview">
                <div id="description">
                    <a name="Overview"></a> 
                    <h2>Overview</h2>
                    <div id="col1">
                        <p>Corporations are more powerful than ever, and great power comes great responsibility.</p>
		                <p>Corporations need to do more to make sure their business practices are sustainable. They must help build a world where everyone is treated fairly and our environment is protected. It's time to use our collective purchasing power for good.</p>
                    </div>
                    <div id="col2">
                        <p><br /><br /></p>
                        <p>Inform is a tool for consumers to use their buying power to influence the social responsibility initiatives of companies. It aggregates existing Corporate Social Responsibility (CSR) data on initiatives pertaining to sustainable supply chain practices, labor rights, energy usage and more. </p>
		                <p>By staying informed, you can support companies that implement sound social responsibility practices and avoid those that don't. </p>
                    </div>
		            
		            
	        	</div>
                <div id="howto">
                    <a name="Install"></a> 
                    <h2>How to use Inform</h2> 
                    <p>Inform works through a Chrome extension blah blah blah you must install it and then it will work on those sites or whatever. This is placeholder copy</p>
                    <a href="https://www.jeff-park.com"><div className="button">Add to Chrome</div></a>
                </div>
            </div>
        )
    }
}

export default Overview;