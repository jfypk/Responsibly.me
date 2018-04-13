import React, { Component } from 'react';
import '../index.css';

class SimilarSection extends Component {

    parseList(list, inputArray) {
        /*
        *   parse String list for , and trim
        *   add element to inputArray
        */
    }

    render() {

        return(
            <div className="Section">
                <div className="Company1">
                        {this.props.competitors}
                    <div className="Rating">
                        {this.props.competitor_scores}
                    </div>
                </div>
            </div>
        );
    }
}

export default SimilarSection;