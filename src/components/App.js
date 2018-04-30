import React, { Component } from 'react';
import '../index.css';
import ResultsContainer from '../containers/ResultsContainer';
import Splash from '../components/Splash/Splash';
import {apiURL} from '../config.js'

class App extends Component {
  render() {
    var apiurl = apiURL;
    if(this.props.site === "") {
      return <Splash />
    }

    return (
      <div className="App">
        <ResultsContainer site={this.props.site} url={apiurl+'/api/results'} pollInterval={20000} />
      </div>
    );
  }
}

export default App;
