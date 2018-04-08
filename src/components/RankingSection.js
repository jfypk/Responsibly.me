import React, { Component } from 'react';
import '../index.css';
import Textbox from './Textbox.js';

class RankingSection extends Component {

    render() {
        let sustainabilityList = [this.props.esg_score, this.props.gc_score, this.props.corporate_knights_score];
        let environmentalList = [this.props.greener_electronics, this.props.clean_energy_index, this.props.natural_gas_intensity, this.props.coal_intensity, this.props.nuclear_intensity, this.props.energy_transparency, this.props.renewable_energy_commitment, this.props.energy_efficiency, this.props.renewable_procurement, this.props.advocacy, this.props.detox_2020_plan, this.props.pfc_elimination, this.props.transparency];
        let fairnessList = [this.props.cei_rating, this.props.ethical_company_nominee, this.props.women_on_board, this.props.best_workplaces_women, this.props.best_workplaces_diversity];
        let parent = ""
        
        if(this.props.parent !== "n/a") {
            parent = this.props.parent;
        }

        return(
            <div className="Section">
                <div className="companyInfo">
                    <p>{this.props.brand}</p>
                    <p>{parent}</p>
                    <p>Industry: {this.props.industry}</p>
                </div>
                <div className="Sustainability">
                    <p>Sustainability</p>
                    <ul>
                        {sustainabilityList.map(function(list, index){
                            return <li key={index}>{list}</li>
                        })}
                    </ul>
                </div>
                <div className="Environmental">
                    <p>Environmental Health</p>
                    <ul>
                        {environmentalList.map(function(list, index){
                            return <li key={index}>{list}</li>
                        })}
                    </ul>
                </div>
                <div className="Fairness">
                    <p>Fairness in the Workplace</p>
                    <ul>
                        {fairnessList.map(function(list, index){
                            return <li key={index}>{list}</li>
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default RankingSection;