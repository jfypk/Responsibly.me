import React, { Component } from 'react';
import '../index.css';
import CompanySection from './CompanySection.js';
import RankingSection from './RankingSection.js';
import SimilarSection from './SimilarSection.js';

class Results extends Component {
    render() {
        console.log(this.props.data);
        return (
            <div className="Results">
                <CompanySection 
                    brand={this.props.data.brand} 
                    parent={this.props.data.parent} 
                    industry={this.props.data.industry}
                />
                <RankingSection 
                    cei_rating= { this.props.data.cei_rating } 
                    ethical_company_nominee= { this.props.data.ethical_company_nominee } 
                    women_on_board= { this.props.data.women_on_board } 
                    best_workplaces_women= { this.props.data.best_workplaces_women } 
                    best_workplaces_diversity= { this.props.data.best_workplaces_diversity } 
                    esg_score= { this.props.data.esg_score } 
                    gc_score= { this.props.data.gc_score } 
                    corporate_knights_score= { this.props.data.corporate_knights_score } 
                    greener_electronics= { this.props.data.greener_electronics } 
                    clean_energy_index= { this.props.data.clean_energy_index } 
                    natural_gas_intensity= { this.props.data.natural_gas_intensity } 
                    coal_intensity= { this.props.data.coal_intensity } 
                    nuclear_intensity= { this.props.data.nuclear_intensity } 
                    energy_transparency= { this.props.data.energy_transparency } 
                    renewable_energy_commitment= { this.props.data.renewable_energy_commitment } 
                    energy_efficiency= { this.props.data.energy_efficiency } 
                    renewable_procurement= { this.props.data.renewable_procurement } 
                    advocacy= { this.props.data.advocacy } 
                    detox_2020_plan= { this.props.data.detox_2020_plan } 
                    pfc_elimination= { this.props.data.pfc_elimination } 
                    transparency= { this.props.data.transparency } 
                />
                <SimilarSection 
                    name= { this.props.data.brand } 
                    industry= { this.props.data.industry }/>
                </div>
        );
        
    }
}

export default Results;