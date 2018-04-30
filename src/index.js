import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

var url = document.getElementById('url').innerHTML;	
console.log(url);

ReactDOM.render(
    <App site={url}/>, 
    document.getElementById('root')
);
