import React, { Component } from 'react';
import axios from 'axios';


var Container = React.createClass({
    getInitialState: function() {
        return {
            data: null,
            fetching: false,
            error: null
        };
    },
    
    render: function() {
        if (this.props.fetching) {
            return <div>Loading...</div>;
        }
        
        if (this.props.error) {
            return (
                <div className='error'>
                    {this.state.error.message}
                </div>
            );
        }
        
        return <Counter {...data} />
    },
    
    componentDidMount: function() {
        this.setState({fetching: true});
        
        Axios.get(this.props.url).then(function(res) {
            this.setState({data: res.data, fetching: false});
        }).catch(function(res) {
            this.setState({error: res.data, fetching: false});
        });
    }
}); 