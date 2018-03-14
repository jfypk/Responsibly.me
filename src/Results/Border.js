import React, { Component } from 'react';
import './Border.css';
import Textbox from './Textbox.js';
import Logobox from './Logobox.js';

class Border extends Component {
    render() {
        return(
            <div className="Border">
                <Textbox />
                <Logobox />
            </div>
        );
    }
}

export default Border;