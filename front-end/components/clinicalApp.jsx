import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

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
        console.log('----------- 1  -----------');
        super(props);

        this.state = {
            isLogin: false
        };
        this.urlHelper = new UrlHelper();
    }

    async componentWillMount() {
        console.log('----------- 2  -----------');
        let self = this;
        try {
            let response = await axios.get(this.urlHelper.apiBaseUrl() + '/authentication');
            if (response.data.isLogin) {
                this.setState({
                    isLogin: response.data.isLogin
                });
            }
        } catch (error) {
            self.store.notify('error', error.message);
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('----------- 3  -----------');
        if(!nextState.isLogin){
            window.location = '/auth';
            return false;
        }

        return true;
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
