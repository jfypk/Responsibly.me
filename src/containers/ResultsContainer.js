import React, { Component } from 'react';
import axios from 'axios';
import Results from '../components/Results.js';

class ResultsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [], fetching: false, error: null }
        this.loadResultsFromServer = this.loadResultsFromServer.bind(this);
    }

    getInitialState() {
        return {
            data: null,
            fetching: false,
            error: null
        };
    }

    loadResultsFromServer() {
        axios.get(this.props.url).then(res => {
            this.setState({ data: res.data, fetching: false}) //how do i get this data into the background.js file? 
        }).catch(res => {
            this.setState({error: res.data, fetching: false});
        });
    }

    render() {
        if (this.props.fetching) {
            return <div> Loading...</div>;
        }

        if (this.props.error) {
            return (
                <div className = 'error'>
                    {this.state.error.message}
                </div>
            );
        }

        return (
            <Results data={ this.state.data } />
            )

    }

    componentDidMount() {
        this.setState({fetching: true});
        this.loadResultsFromServer();
        //make the poll interval longer than 2 seconds for performance.
        setInterval(this.loadResultsFromServer, this.props.pollInterval);
    }

}

export default ResultsContainer;