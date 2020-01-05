import React, { Suspense } from 'react'
import ReactDOM from 'react-dom';
import App from './app/App';
import * as serviceWorker from './app/serviceWorker';
import './assets/styles/normalize.css';
import './assets/styles/global.scss';

ReactDOM.render((
    <Suspense fallback={null}>
        <App />
    </Suspense>

), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();