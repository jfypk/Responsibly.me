import React, { Component } from 'react';
import '../index.css';
import ResultsContainer from '../containers/ResultsContainer';
import Header from '../components/Header';
import Splash from '../components/Splash';

class App extends Component {
  // getDefaultProps(){

  // }

  // getInitialState() {

  // }

  render() {
    var condition = true; //CHANGE THIS CONDITION TO TRACK THE URL
    const page = condition ? (
      <ResultsContainer url='http://localhost:3001/api/results' pollInterval={20000} />
      ) : (
      <Splash />
      );


    return (
      <div className="App">
        <Header />
        {page}
      </div>
    );
  }
}

export default App;
