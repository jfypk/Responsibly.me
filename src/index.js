import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

console.log(window.tabURL); //how do i read tabURL into this file?

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);
registerServiceWorker();
