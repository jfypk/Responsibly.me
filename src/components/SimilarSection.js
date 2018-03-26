import React, { Component } from 'react';
import '../index.css';
import Logobox from './Logobox.js';

class SimilarSection extends Component {
    render() {

        return(
            <div className="Section">
                <div className="Company1"><Logobox company={this.props.brand} rating={this.props.industry}/></div>
                <div className="Company2"><Logobox company={this.props.brand} rating={this.props.industry}/></div>
                <div className="Company3"><Logobox company={this.props.brand} rating={this.props.industry}/></div>
            </div>
        );
    }
}

export default SimilarSection;