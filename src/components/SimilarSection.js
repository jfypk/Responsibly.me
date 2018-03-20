import React, { Component } from 'react';
import '../index.css';
import Logobox from './Logobox.js';

class SimilarSection extends Component {
    render() {

        return(
            <div className="SimilarSection">
                <div className="Company1"><Logobox company="Adidas" rating="Good"/></div>
                <div className="Company2"><Logobox company="Puma" rating="Fair"/></div>
                <div className="Company3"><Logobox company="Reebok" rating="Bad"/></div>
            </div>
        );
    }
}

export default SimilarSection;