import React, { Component } from 'react';
import '../index.css'; 

class Sources extends Component {
	render() {
		return(
			<div className="Sources">
				<p>Sustainability, Environmental Health, and Fairness in the Workplace data sources include:</p>
                <ul>
                    <li>Greenpeace Catwalk</li>
                    <li>Greenpeace Clicking Clean</li>
                    <li>Greenpeace Greener Electronics</li>
                    <li>Great Places to Work: Best Workplaces for Women</li>
                    <li>Great Places to Work: Best Workplaces for Diversity</li>
                    <li>Corporate Knights: World's Most Sustainable Companies</li>
                    <li>Arabesque: S-Ray</li>
                    <li>Human Rights Campaign: Corporate Equality Index</li>
                </ul>
                <br />
                <h3>Methodology</h3>
                <p>With 20 data points, each data point contributed to 5% of the overall score. To obtain the overall score, each data point was normalized to a 100 point scale and then divided by 100 and multiplied by 5%. The overall score is the sum of each of these proportions.</p>
                <p>Further iterations might explore experimenting with weighting different rankings over others.</p>
			</div>
			);
	}
}

export default Sources