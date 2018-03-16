import React, { Component } from 'react';
import './Logobox.css';

class Logobox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return( 
            <div className="Logobox">
                <div className="Logo">
                    {this.props.company} logo here
                </div> 
                <div className="Rating">
                    {this.props.rating}
                </div>
            </div>
        );
    }
}

export default Logobox;