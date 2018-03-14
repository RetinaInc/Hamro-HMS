import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';
import ReactNotify from 'react-notify';

import StateApi from 'utilities/stateApi';
import LoginPage from 'components/authApp/loginPage.jsx';
import LogoutPage from 'components/authApp/logoutPage.jsx';
import UrlHelper from 'utilities/urlHelper';
export default class LoginApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.urlHelper = new UrlHelper();
    }

    static childContextTypes = {
        store: PropTypes.object
    };

    getChildContext() {
        return {
            store: new StateApi(this)
        };
    }

    render() {
        return (
            <div>
                <div className="container">
                    <Switch>
                        <Route exact={true} path="/" component={LoginPage} />
                        <Route exact={true} path="/login" component={LoginPage} />
                        <Route exact={true} path="/logout" component={LogoutPage} />
                    </Switch>
                </div>
                <ReactNotify ref="notifier" successText="Success" errorText="Error" infoText="Info" />
            </div>
        );
    }
}
