import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

var url = document.getElementById('url').innerHTML;	
// var url = "google.com";

console.log(url);

ReactDOM.render(
    <App site={url}/>, 
    document.getElementById('root')
);
registerServiceWorker();
