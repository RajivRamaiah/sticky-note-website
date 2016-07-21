import React from 'react';
import ReactDOM from 'react-dom';
import CreateBar from './components/create_bar.js';

import App from './components/app';

import './style.scss';

// entry point that just renders app
// could be used for routing at some point
ReactDOM.render(<App />, document.getElementById('main'));
