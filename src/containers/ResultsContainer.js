import React, { Component } from 'react';
import axios from 'axios';
import Results from '../components/Results.js';
import MissingCompany from '../components/MissingCompany';
import Splash from '../components/Splash';

class ResultsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [], fetching: false, error: null }
        this.loadResultsFromServer = this.loadResultsFromServer.bind(this);
        this.findDataForURL = this.findDataForURL.bind(this);
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
            let urlData = this.findDataForURL(res.data, this.props.site);
            this.setState({ data: urlData, fetching: false}) //how do i get this data into the background.js file? 
        }).catch(res => {
            this.setState({error: res.data, fetching: false});
        });
    }

    findDataForURL(data, url) {
        for(var elt of data) {
            if(elt.domain === url) {
                return elt;
            }
        }
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

        if (this.props.site === "") {
            return <Splash />
        }

        if (this.state.data === undefined) {
            return <MissingCompany />
        }

        return (
            <Results data={ this.state.data } />
            )

    }

    componentDidMount() {
        this.setState({fetching: true});
        this.loadResultsFromServer();
        setInterval(this.loadResultsFromServer, this.props.pollInterval);
    }

}

export default ResultsContainer;