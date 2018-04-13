import React, { Component } from 'react';
import '../index.css';
// import DataSection from './DataSection.js';

class RankingSection extends Component {

//may have to break this up into its own components for sustainability, environmental, and fairness again. or create conditional components so that a li doesn't show if data is -1

    


    render() {
    // let sustainabilityLabels = ["ESG Score", "GC Score", "Corporate Knights Score"];
    // let sustainabilityData = [this.props.esg_score, this.props.gc_score, this.props.corporate_knights_score];
    // <DataSection question="How sustainable is this company's business practices?" labels={ sustainabilityLabels } data={sustainabilityData} />

        

        


        let parent = ""
        
        if(this.props.parent !== "n/a") {
            parent = this.props.parent;
        }

        return(
            <div>
                <div className="NameSection">
                    <div className="BrandData">
                        <p>{this.props.brand}</p>
                        <p>{parent}</p>
                        <p>{this.props.total_score}</p>
                        <p>{this.props.industry}</p>
                    </div>   
                </div>
                <div className="Rankings">
                    <div className="Sustainability">
                        <h1>Sustainability</h1>
                        <h4>How sustainable are {this.props.brand}'s business practices?</h4>
                        <ul>
                            <li>ESG Score: {this.props.esg_score}%</li>
                            <li>GC Score: {this.props.gc_score}%</li>
                            <li>Corporate Knights Score: {this.props.corporate_knights_score*100}%</li>
                        </ul>
                    </div>
                    <div className="Environmental">
                        <h1>Environmental Health</h1>
                        <h4>What portion of {this.props.brand}'s energy comes from:</h4>
                        <ul>
                            <li>Clean Energy: {this.props.clean_energy_index*100}%</li>
                            <li>Natural Gas: {this.props.natural_gas_intensity*100}%</li>
                            <li>Coal Intensity: {this.props.coal_intensity*100}%</li>
                            <li>Nuclear Intensity: {this.props.nuclear_intensity*100}%</li>
                        </ul>
                        
                        <h4>How can we grade {this.props.brand}'s organizational efforts towards energy sources?</h4>
                        <ul>
                            <li>Energy Usage Transparency: {this.props.energy_transparency/4*100}%</li>
                            <li>Commitment to Renewable Energy Sources: {this.props.renewable_energy_commitment/4*100}%</li>
                            <li>Efficiency of Energy Sources: {this.props.energy_efficiency/4*100}%</li>
                            <li>Quality of how {this.props.brand} procures its energy: {this.props.renewable_procurement/4*100}%</li>
                            <li>Quality of how {this.props.brand} advocates for the use of renewable energy: {this.props.advocacy/4*100}%</li>
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
                             <li>Corporate Equality Index: {this.props.cei_rating}%</li>
                            <li>% Women on Board: {this.props.women_on_board*100}%</li>
                            <li>Best Workplaces for Women: {this.props.best_workplaces_women}</li>
                            <li>Best Workplaces for Diversity: {this.props.best_workplaces_diversity}</li>
                        </ul>
                    </div>
                    <div>
                        <button><a href="https://www.surveymonkey.com/r/M9F73JT">Is this helpful?</a></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default RankingSection;