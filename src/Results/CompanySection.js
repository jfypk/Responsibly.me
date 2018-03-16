import React, { Component } from 'react';
import './CompanySection.css';
import Textbox from './Textbox.js';
import Logobox from './Logobox.js';

class CompanySection extends Component {
    render() {
        var myList = ["CEO: Charles Mingus", "Nowhereville, NO", "USA"];

        return(
            <div className="CompanySection">
                <div className="CompanyImg">
                    <Logobox company="Nike"/>
                </div>
                <div className="CompanyInfo">
                    <Textbox header="Company Name" list={myList}/>
                </div>
            </div>
        );
    }
}

export default CompanySection;