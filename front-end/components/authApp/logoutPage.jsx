import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

import UrlHelper from 'utilities/urlHelper';
export default class LogoutPage extends React.Component {
    constructor(props, context) {
        super(props);
        this.urlHelper = new UrlHelper();
        this.store = context.store;
    }

    async componentWillMount() {
        let self = this;
        try {
            await axios.get(this.urlHelper.apiBaseUrl() + '/authentication/logout');
        } catch (error) {
            self.store.notify('error', error.message);
        }
    }

    render() {
        return <Redirect to="/login"/>;
    }
}

LogoutPage.contextTypes = {
    store: PropTypes.object
};