import React, { Component } from 'react';
import '../index.css';
import CompanySection from './CompanySection.js';
import RankingSection from './RankingSection.js';
import SimilarSection from './SimilarSection.js';

class Results extends Component {

    render() {
        let returnNodes = this.props.data.map(result => {
            return( 
                <CompanySection name: { result.name } industry: { result.industry } rating: { result.rating } />
                <RankingSection numLists: { result.numLists } />
                <SimilarSection name: { result.name } industry: { result.industry }/>
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