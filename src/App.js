import React, { Component } from 'react';
import './App.css';
import Results from './Results/Results';
import Header from './Header';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Results />
      </div>
    );
  }
}

export default App;
