import React, { Component } from 'react';
import '../../index.css';

class Overall extends Component {

    render() {

        return(
            <div className="Overall">
                <div id="overallscoresection">
                    <h4>Overall</h4>
                    <p><span id="overall-score">{this.props.score}</span> / 100</p>
                </div>
                <div id="overalltitles">
                    <p>Sustainability</p>
                    <p>Environmental</p>
                    <p>Workplace</p>
                </div>
                <div id="overallbreakdown">
                    <p>{this.props.sscore}</p>
                    <p>{this.props.escore}</p>
                    <p>{this.props.fscore}</p>
                </div>
            </div>
        );
    }
}

export default Overall;