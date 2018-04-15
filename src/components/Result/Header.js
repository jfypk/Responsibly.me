import React, { Component } from 'react';
import '../../index.css';

class Header extends Component {

    render() {

        return(
            <div className="extHeader">
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}

export default Header;