import React from 'react';
import ReactDOM from 'react-dom';
import ClinicalApp from 'components/clinicalApp.jsx';
import {HashRouter} from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <ClinicalApp />
    </HashRouter>,
    document.getElementById('wrapper')
);
