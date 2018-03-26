import React, { Component } from 'react';
import '../index.css';
import Textbox from './Textbox.js';
import Logobox from './Logobox.js';

class CompanySection extends Component {
    render() {
        var myList = [this.props.parent, this.props.industry];

        return(
            <div className="Section">
                <div className="CompanyImg">
                    <Logobox company={this.props.brand}/>
                </div>
                <div className="CompanyInfo">
                    <Textbox header={this.props.brand} list={myList}/>
                </div>
            </div>
        );
    }
}

export default CompanySection;