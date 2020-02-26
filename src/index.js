import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// locals
import App from './App';
import './scss/styles.scss';

const AppWithRouter = props => {
    return (
        <Router>
            <App />
        </Router>
    );
};

ReactDOM.render(<AppWithRouter />, document.getElementById('root'));
