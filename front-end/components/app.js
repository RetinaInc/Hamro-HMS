import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

import PatientDashboard from 'components/pages/patientDashboard';
import StateApi from 'utilities/stateApi';
import UrlHelper from 'utilities/urlHelper';

class App extends React.Component {
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
                <Switch>
                    <Route path='/' component={PatientDashboard} />
                </Switch>
            </div>
        );
    }
}

export default App;
