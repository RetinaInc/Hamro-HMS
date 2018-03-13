import React from 'react';
import ReactDOM from 'react-dom';
import AuthApp from 'components/authApp.jsx';
import {HashRouter} from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <AuthApp />
    </HashRouter>,
    document.getElementById('wrapper')
);
