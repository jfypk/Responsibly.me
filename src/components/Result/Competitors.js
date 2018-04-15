import React, { Component } from 'react';
import '../../index.css';

class Competitors extends Component {
    //add logic for if competitor score > overall score, turn text green (this needs to happen when component is mounted);

    parseList(list) {
        if(list) {
            let outputArray = list.split(', ');
            return outputArray;
        }
        
    }



    render() {
        let competitorArray = this.parseList(this.props.competitors);
        let competitorScoreArray = this.parseList(this.props.competitor_scores);
        let competitors = [];
        let competitor_scores = [];
        if(competitorArray){
            competitors = competitorArray.map((competitor) =>
                <div key={competitor.id}><h4>{competitor}</h4></div>
                );
            competitor_scores = competitorScoreArray.map((score) =>
                <div>{score}</div>
                );
        }
        
        return(
            <div className="Competitors">
                <div className="competitorScore">
                    {competitor_scores}
                </div>
                <div className="competitorNames">
                        {competitors}
                </div>
                <hr />
            </div>
        );
    }
}

export default Competitors;