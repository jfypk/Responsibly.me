import React, { Component } from 'react';
import '../index.css';
import Textbox from './Textbox.js';

class RankingSection extends Component {
    render() {
        var sustainabilityList = ["ranking #23", "rating #2", "best ever"];
        var environmentalList = ["ranking #23", "rating #2", "best ever"];
        var fairnessList = ["ranking #23", "rating #2", "best ever"];

        return(
            <div className="RankingSection">
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