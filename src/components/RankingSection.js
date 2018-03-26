import React, { Component } from 'react';
import '../index.css';
import Textbox from './Textbox.js';

class RankingSection extends Component {
    render() {
        let sustainabilityList = [this.props.esg_score, this.props.gc_score, this.props.corporate_knights_score];
        let environmentalList = [this.props.greener_electronics, this.props.clean_energy_index, this.props.natural_gas_intensity, this.props.coal_intensity, this.props.nuclear_intensity, this.props.energy_transparency, this.props.renewable_energy_commitment, this.props.energy_efficiency, this.props.renewable_procurement, this.props.advocacy, this.props.detox_2020_plan, this.props.pfc_elimination, this.props.transparency];
        let fairnessList = [this.props.cei_rating, this.props.ethical_company_nominee, this.props.women_on_board, this.props.best_workplaces_women, this.props.best_workplaces_diversity];

        return(
            <div className="Section">
                <div className="Sustainability">
                    <Textbox header="Sustainability" list={sustainabilityList}/>
                </div>
                <div className="Environmental">
                    <Textbox header="Environmental Health" list={environmentalList}/>
                </div>
                <div className="Fairness">
                    <Textbox header="Fairness in the Workplace" list={fairnessList}/>
                </div>
            </div>
        );
    }
}

export default RankingSection;