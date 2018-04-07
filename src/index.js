import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

var url = document.getElementById('url').innerHTML;	

ReactDOM.render(
    <App site={url}/>, 
    document.getElementById('root')
);
registerServiceWorker();
