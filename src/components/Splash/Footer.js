import React, { Component } from 'react';
import '../../index.css';

class Footer extends Component {
    render() {
        return(
            <div className="Footer">
                <div className="backtotop">
                    <a href="#Top">Back to top</a>
                </div>
                <div className="footerdescription">
                    <p>This is a thesis project by Jeff Park.</p>
                </div>
                <div className="copyright">
                    <p>April 2018</p>
                    <a href="https://jeff-park.com/work/responsibly">About</a>
                </div>
            </div>
        )
    }
}

export default Footer;