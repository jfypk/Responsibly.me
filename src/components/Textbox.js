import React, { Component } from 'react';
import '../index.css';

class Textbox extends Component {
    render() {
        return(
            <div className="Textbox">
                <div className="Header">
                    {this.props.header}
                </div>
                <div className="List">
                    <ul>
                        {this.props.list.map(function(list, index){
                            return <li key={index}>{list}</li>
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Textbox;
