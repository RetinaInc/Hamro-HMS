import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

import TopNavBar from 'components/navigations/topNavBar';
import PatientPageWrapper from 'components/pages/patients/patientPageWrapper';
import Dashboard from 'components/pages/dashboard';
import StateApi from 'utilities/stateApi';
import UrlHelper from 'utilities/urlHelper';

export default class ClinicalApp extends React.Component {
    static childContextTypes = {
        store: PropTypes.object
    };

    getChildContext() {
        return {
            store: new StateApi(this)
        };
    }

    constructor(props) {
        super(props);

        this.state = {
            timeStamp: new Date()
        };
        this.urlHelper = new UrlHelper();
    }

    render() {
        return (
            <div>
                <TopNavBar />
                <div id="page-wrapper">
                    <Switch>
                        <Route exact={true} path="/" component={Dashboard} />
                        <Route path="/patients" component={PatientPageWrapper} />
                    </Switch>
                </div>
            </div>
        );
    }
}
