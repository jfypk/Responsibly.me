import React, { Component } from 'react';
import '../index.css';
import ResultsContainer from '../containers/ResultsContainer';
import Header from '../components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ResultsContainer site={this.props.site} url='http://localhost:3001/api/results' pollInterval={20000} />
      </div>
    );
  }
}

export default App;
