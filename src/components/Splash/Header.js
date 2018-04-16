import React, { Component } from 'react';
import '../../index.css';

class Header extends Component {
    //add logo
    render() {
        return(
            <div className="SplashHeader">
                <div className="headerText">
                    <a name="Top"></a> 
                    <h1>Inform</h1>
                    <ul>
                        <li><a href="#Overview">Overview</a></li>
                        <li><a href="#Install">Install</a></li>
                        <li><a href="#Companies">Companies</a></li>
                    </ul>
                </div>
                <div className="headerImg">
                    <img src="https://media.mnn.com/assets/images/2015/05/fjord-01.jpeg" alt="Hero"></img>
                </div>
                
            </div>
        )
    }
}

export default Header;