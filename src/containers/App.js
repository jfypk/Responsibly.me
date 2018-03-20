import React, { Component } from 'react';
import '../index.css';
import Results from '../components/Results';
import Header from '../components/Header';

//will need to add delete/update/post results 

class App extends Component {
  getDefaultProps(){

  }

  getInitialState() {
    
  }

  render() {
    return (
      <div className="App">
        <Header />
        //each URL will need to be the results for an individual company
        <ResultsContainer url='http://localhost:8080/api/results' pollInterval={2000} />
      </div>
    );
  }
}

export default App;
