import React, { Component } from 'react';
import '../index.css';
import Data from './Data.js';

class DataSection extends Component {

    listItem(l, d) {
            for(let i=0; i<l.length; i++) {
                console.log(l[i]);
                return <li>{l[i]}: {d[i]}</li>
            }
        }

    render() {
        // console.log(this.props.labels);
        

        return(
            <div>
                <h4>{this.props.question}</h4>
                <ul>
                    {this.listItem(this.props.labels, this.props.data)}
                </ul>
            </div>
        )
    }
}

export default DataSection