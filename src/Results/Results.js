import React, { Component } from 'react';
import './Results.css';
import Border from './Border.js';

class Results extends Component {
    render() {
        return(
            <div className="Results">
                <Border />
                <p></p>
                <Border />
                <p></p>
                <Border />
            </div>
        );
        
    }
}

export default Results;