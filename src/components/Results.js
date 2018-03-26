import React, { Component } from 'react';
import '../index.css';
import CompanySection from './CompanySection.js';
import RankingSection from './RankingSection.js';
import SimilarSection from './SimilarSection.js';

class Results extends Component {

    render() {
        let returnNodes = this.props.data.map(result => {
            return( 
                <div>
                <CompanySection 
                    name={result.brand} 
                    parent={result.parent} 
                    industry={result.industry}
                />
                <RankingSection 
                    cei_rating= { result.cei_rating } 
                    ethical_company_nominee= { result.ethical_company_nominee } 
                    women_on_board= { result.women_on_board } 
                    best_workplaces_women= { result.best_workplaces_women } 
                    best_workplaces_diversity= { result.best_workplaces_diversity } 
                    esg_score= { result.esg_score } 
                    gc_score= { result.gc_score } 
                    corporate_knights_score= { result.corporate_knights_score } 
                    greener_electronics= { result.greener_electronics } 
                    clean_energy_index= { result.clean_energy_index } 
                    natural_gas_intensity= { result.natural_gas_intensity } 
                    coal_intensity= { result.coal_intensity } 
                    nuclear_intensity= { result.nuclear_intensity } 
                    energy_transparency= { result.energy_transparency } 
                    renewable_energy_commitment= { result.renewable_energy_commitment } 
                    energy_efficiency= { result.energy_efficiency } 
                    renewable_procurement= { result.renewable_procurement } 
                    advocacy= { result.advocacy } 
                    detox_2020_plan= { result.detox_2020_plan } 
                    pfc_elimination= { result.pfc_elimination } 
                    transparency= { result.transparency } 
                    />
                <SimilarSection name= { result.brand } industry= { result.industry }/>
                </div>
            )
        })
        return(
            <div className="Results">
                { returnNodes }
            </div>
        );
        
    }
}

export default Results;