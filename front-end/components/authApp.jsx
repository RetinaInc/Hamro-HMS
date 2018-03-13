import React from 'react';
import {Switch, Route} from 'react-router-dom';

import LoginPage from 'components/login/loginPage.jsx';
import UrlHelper from 'utilities/urlHelper';
export default class LoginApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        };

        this.urlHelper = new UrlHelper();
    }

    render() {
        return (
            <div>
                <div className="container">
                    <Switch>
                        <Route exact={true} path='/' component={LoginPage}/>
                        <Route exact={true} path='/login' component={LoginPage}/>
                    </Switch>
                </div>
            </div>
        );
    }
}
