import React, { Component } from 'react';
import '../../index.css';

class Overview extends Component {
    render() {
        return(
            <div className="Overview"> 
                <div id="overviewheader">
                    <a name="Overview"></a>
                    <h3>Overview</h3>
                </div>
                <div id="col1">
                    <p>Corporations are more powerful than ever, and great power comes great responsibility.</p>
                    <p>Corporations need to do more to make sure their business practices are sustainable. They must help build a world where everyone is treated fairly and our environment is protected. It's time to use our collective purchasing power for good.</p>
                </div>
                <div id="col2">
                    <br /><br /><br />
                    <p>Responsibly is a tool for consumers to use their buying power to influence the social responsibility initiatives of companies. It aggregates existing Corporate Social Responsibility (CSR) data on initiatives pertaining to sustainable supply chain practices, labor rights, energy usage and more. </p>
                    <p>By staying informed, you can support companies that implement sound social responsibility practices and avoid those that don't. </p>
                </div>
                <div id="howtoheader">
                    <a name="Install"></a> 
                    <h3>How to use Responsibly</h3> 
                </div>
                <div id="howtotext">
                    <p>Install the Responsibly.me extension and click on the Responsibly.me icon on your browser to begin your experience.</p>
                </div>
                <div id="chromebutton"><a href="https://www.jeff-park.com"><div className="button">Add Extension</div></a></div>
            </div>
        )
    }
}

export default Overview;