import React, { Component } from 'react';
import '../../index.css';

class Details extends Component {

    render() {
        return(
            <div className="Details">
                <div className="Sustainability">
                    <h1>Sustainability</h1>
                    <h4>How sustainable are {this.props.brand}'s business practices?</h4>
                    <ul>
                        <li>ESG Score: {this.props.esg_score}</li>
                        <li>GC Score: {this.props.gc_score}</li>
                        <li>Corporate Knights Score: {this.props.corporate_knights_score}</li>
                    </ul>
                </div>
                <div className="Environmental">
                    <h1>Environmental Health</h1>
                    <h4>What portion of {this.props.brand}'s energy comes from:</h4>
                    <ul>
                        <li>Clean Energy: {this.props.clean_energy_index}</li>
                        <li>Natural Gas: {this.props.natural_gas_intensity}</li>
                        <li>Coal Intensity: {this.props.coal_intensity}</li>
                        <li>Nuclear Intensity: {this.props.nuclear_intensity}</li>
                    </ul>
                    
                    <h4>How can we grade {this.props.brand}'s organizational efforts towards energy sources?</h4>
                    <ul>
                        <li>Energy Usage Transparency: {this.props.energy_transparency}</li>
                        <li>Commitment to Renewable Energy Sources: {this.props.renewable_energy_commitment}</li>
                        <li>Efficiency of Energy Sources: {this.props.energy_efficiency}</li>
                        <li>Quality of how {this.props.brand} procures its energy: {this.props.renewable_procurement}</li>
                        <li>Quality of how {this.props.brand} advocates for the use of renewable energy: {this.props.advocacy}</li>
                    </ul>
                    
                    <h4>How proactive and precautionary is {this.props.brand}'s system for eliminating hazardous chemicals from its products?</h4>
                    <ul>
                        <li>Detox 2020 Plan: {this.props.detox_2020_plan}</li>
                        <li>PFC Elimination: {this.props.pfc_elimination}</li>
                        <li>Transparency: {this.props.transparency}</li>
                    </ul>
                </div>
                <div className="Fairness">
                    <h1>Fairness in the Workplace</h1>
                    <h4>How much does {this.props.brand} care about a fair workplace regardless of gender, sexual orientation, and race?</h4>
                    <ul>
                         <li>Corporate Equality Index: {this.props.cei_rating}</li>
                        <li>% Women on Board: {this.props.women_on_board}</li>
                        <li>Best Workplaces for Women: {this.props.best_workplaces_women}</li>
                        <li>Best Workplaces for Diversity: {this.props.best_workplaces_diversity}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Details;