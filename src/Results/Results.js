import React, { Component } from 'react';
import './Results.css';
import CompanySection from './CompanySection.js';
import RankingSection from './RankingSection.js';
import SimilarSection from './SimilarSection.js';

class Results extends Component {
    render() {
        return(
            <div className="Results">
                <CompanySection />
                <RankingSection />
                <SimilarSection />
            </div>
        );
        
    }
}



export default Results;