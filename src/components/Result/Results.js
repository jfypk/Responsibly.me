import React, { Component } from 'react';
import '../../index.css';
import Details from './Details.js';
import Competitors from './Competitors.js';
import Header from './Header.js';
import Overall from './Overall.js';

class Results extends Component {

    noInfo(d) {
        if (d !== -1) {
            return d;
        } else {
            return "N/A";
        }
    }

    render() {
        return (
            <div className="Results">
                <Header name={this.props.data.brand}/>
                <Overall fscore={this.props.data.fairness_score} 
                        sscore={this.props.data.sustainability_score} 
                        escore={this.props.data.environmental_score} 
                        score={this.props.data.total_score} 
                />
                <Competitors 
                    brand = {this.props.data.brand}
                    score = {this.props.data.total_score}
                    competitors = {this.noInfo(this.props.data.competitors)}
                    competitor_scores = {this.noInfo(this.props.data.competitor_scores)}
                    />
                <Details 
                    cei_rating= {this.noInfo(this.props.data.cei_rating) } 
                    women_on_board= {this.noInfo(this.props.data.women_on_board)} 
                    best_workplaces_women= {this.noInfo(this.props.data.best_workplaces_women) } 
                    best_workplaces_diversity= {this.noInfo(this.props.data.best_workplaces_diversity) } 
                    esg_score= {this.noInfo(this.props.data.esg_score) } 
                    gc_score= {this.noInfo(this.props.data.gc_score) } 
                    corporate_knights_score= {this.noInfo(this.props.data.corporate_knights_score) } 
                    greener_electronics= {this.noInfo(this.props.data.greener_electronics) } 
                    clean_energy_index= {this.noInfo(this.props.data.clean_energy_index) } 
                    natural_gas_intensity= {this.noInfo(this.props.data.natural_gas_intensity) } 
                    coal_intensity= {this.noInfo(this.props.data.coal_intensity) } 
                    nuclear_intensity= {this.noInfo(this.props.data.nuclear_intensity) } 
                    energy_transparency= {this.noInfo(this.props.data.energy_transparency) } 
                    renewable_energy_commitment= {this.noInfo(this.props.data.renewable_energy_commitment) } 
                    energy_efficiency= {this.noInfo(this.props.data.energy_efficiency) } 
                    renewable_procurement= {this.noInfo(this.props.data.renewable_procurement) } 
                    advocacy= {this.noInfo(this.props.data.advocacy) } 
                    detox_2020_plan= {this.noInfo(this.props.data.detox_2020_plan) } 
                    pfc_elimination= {this.noInfo(this.props.data.pfc_elimination) } 
                    transparency= {this.noInfo(this.props.data.transparency) } 
                />
                </div>
        );
        
    }
}

export default Results;